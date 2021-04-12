import './Message.css';
import no_avatar from '../../../assets/images/no_avatar.gif';
import config from "../../../config";
const Message = ({message, userId}) => {
    let messageBlock;
    let date = new Date(message.datetime).toLocaleString();
    if (message.author._id === userId) {
        messageBlock = <div className="d-flex justify-content-end mb-4">
            <div className="msg_container">
                {message.message}
                <span className="msg_time">{date} {message.author.username}</span>
            </div>
            <div className="img_cont_msg">
                <img src={message.author.avatar ? config.imageURL + message.author.avatar : no_avatar} alt="avatar" className="rounded-circle user_img_msg"/>
            </div>
        </div>
    } else {
        messageBlock = <div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
                <img src={message.author.avatar ? config.imageURL + message.author.avatar : no_avatar} alt="avatar" className="rounded-circle user_img_msg"/>
            </div>
            <div className="msg_container_send">
                {message.message}
                <span className="msg_time_send">{date} {message.author.username}</span>
            </div>
        </div>
    }
    return (
        messageBlock
    )
}
export default Message;