import {MESSAGE_ERROR, GET_MESSAGES_SUCCESS, SEND_MESSAGE, GET_LAST_MESSAGES_SUCCESS} from "./actionTypes";
import axios from "../../axios-api";

const getMessagesAction = messages => ({type: GET_MESSAGES_SUCCESS, messages});
const getErrorAction = error => ({type: MESSAGE_ERROR, error});
const sendMessageAction = message => ({type: SEND_MESSAGE});
const getLastMessagesAction = (messages) => ({type: GET_LAST_MESSAGES_SUCCESS, messages});

export const getAllMessages = () => {
    return async dispatch => {
        const messages = await axios.get('/messages')
            .then(res => res.data)
            .catch(error => {
                dispatch(getErrorAction(error));
            });
        if (messages) dispatch(getMessagesAction(messages));
    }
}

export const getLastMessages = (lastDate) => {
    console.log(lastDate);
    return async dispatch => {
        const lastMessages = await axios.get("/messages?datetime=" + lastDate)
            .then(res => res.data)
            .catch(e => {
                dispatch(getErrorAction(e));
            })
        console.log(lastMessages);
        if(lastMessages && lastMessages.length > 0) dispatch(getLastMessagesAction(lastMessages));
    }
}

export const sendMessage = (message) => {
    return async dispatch => {
        const newMessage = await axios.post('/messages', message)
            .catch(error => {
                dispatch(getErrorAction(error));
            })
        console.log(message);
        if (newMessage) dispatch(sendMessageAction());
    }
}