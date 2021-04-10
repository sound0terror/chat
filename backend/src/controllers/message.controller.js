const Message = require("../models/Message");
const createMessage = async (req, res) => {
    try {
        let {message} = req.body;
        message = message.trim();
        if(message) {
            const newMessage = Message({message, author: req.user._id});
            await newMessage.save()
            res.send({message: "Сообщение доставлено."});
        } else {
            res.status(400).send({message: "Сообщение не должно быть пустым"});
        }
    } catch (e) {
        res.status(500).send({error: e})
    }
}

const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate("author");
        messages.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        if(req.query.datetime) {
            if (isNaN(req.query.datetime.getDate())) {
                return res.status(400).send({message: "Некорректная дата"});
            }
            const index = messages.findIndex(message => message.datetime === req.query.datetime);
            return res.send([...messages].splice(index));
        }
        res.send(messages);
    } catch (e) {
        res.status(500).send({error: e})
    }
}

module.exports = {createMessage, getAllMessages};