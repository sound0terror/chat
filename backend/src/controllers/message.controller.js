const Message = require("../models/Message");
const createMessage = async (req, res) => {
    try {
        let {message} = req.body;
        message = message.trim();
        if(message) {
            const datetime = new Date().toISOString();
            const newMessage = Message({message, author: req.user._id, datetime});
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
        if(req.query.datetime) {
            const datetime = new Date(req.query.datetime);

            if(isNaN(datetime.getDate())) {
                return res.status(400).send({message: "Некорректная дата"});
            }
            const index = messages.findIndex(message => JSON.stringify(message.datetime) === JSON.stringify(req.query.datetime));
            return res.send([...messages].splice(index + 1));
        }
        res.send(messages);
    } catch (e) {
        res.status(500).send({error: e})
    }
}

module.exports = {createMessage, getAllMessages};