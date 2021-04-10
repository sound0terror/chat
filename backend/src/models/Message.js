const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datetime: {
        type: Date,
        default: new Date().toISOString()
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
