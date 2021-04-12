import Message from "./Message/Message";
import './Messages.css';

const Messages = ({messages, userId}) => {
    return (
        <div className='card-body msg_card_body'>
            {messages.map(message => {
                return <Message key={message._id} message={message} userId={userId}/>
            })}
        </div>
    )
}

export default Messages;