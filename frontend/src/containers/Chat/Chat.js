import {useEffect, useState, useRef} from "react";
import Messages from "../../components/Messages/Messages";
import {useDispatch, useSelector} from "react-redux";
import {getAllMessages, getLastMessages, sendMessage} from "../../store/actions/messageActions";
import Thumbnail from "../../components/UI/Thumbnail/Thumbnail";
import './Chat.css';

const Chat = () => {
    const {messages, lastDatetime} = useSelector(state => state.messages);
    const [message, setMessage] = useState("");
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const ref = useRef(0);

    useEffect(() => {
        dispatch(getAllMessages());
    }, [dispatch])

    useEffect(() => {
        ref.current = setInterval(() => {
            dispatch(getLastMessages(lastDatetime))
        }, 10000)
        return () => {
            clearInterval(ref.current);
        }
    }, [lastDatetime])

    const send = (message) => {
        console.log(message);
        if(user) {
            dispatch(sendMessage({message: message, author: user._id}));
            setMessage('');
        }
    }
    const messageSetHandler = (e) => {
        setMessage(e.target.value);
        console.log(message);
    }
    return (
        <div className="col-md-8 col-xl-6 chat">
            <div className="card">
                <div className="card-header msg_head">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            {user ? <Thumbnail avatar={user.avatar} title='avatar'/> :
                                <Thumbnail avatar={null} title='avatar'/>}

                        </div>
                        <div className="user_info">
                            <span>name: {user ? user.username : "Anonymous"}</span>
                        </div>
                    </div>
                </div>
                <Messages userId={user ? user._id : null} messages={messages}/>
                <div className="card-footer">
                    <div className="input-group">
                        <textarea value={message} onChange={messageSetHandler} className="form-control type_msg"
                                  placeholder="Type your message..."/>
                        <div className="input-group-append">
                            <span onClick={() => {send(message)}} className="input-group-text send_btn"><i className="fas fa-location-arrow"/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;