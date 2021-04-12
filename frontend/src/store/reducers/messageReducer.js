import {GET_LAST_MESSAGES_SUCCESS, GET_MESSAGES_SUCCESS, MESSAGE_ERROR, SEND_MESSAGE} from "../actions/actionTypes";

const initialState = {
    messages: [],
    messageError: null,
    lastDatetime: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {...state, messages: action.messages, lastDatetime: action.messages[action.messages.length - 1].datetime};
        case MESSAGE_ERROR:
            return {...state, messageError: action.error};
        case SEND_MESSAGE:
            return state;
        case GET_LAST_MESSAGES_SUCCESS:
            return {...state, messages: [...state.messages, ...action.messages], lastDatetime: action.messages[action.messages.length - 1].datetime}
        default:
            return state
    }
}

export default reducer;