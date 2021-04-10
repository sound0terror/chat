const User = require('../models/User');
const {nanoid} = require("nanoid");

const logIn = async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) return res.status(400).send({message: 'User not found'});

    const isMatch = await user.checkPassword(req.body.password);

    if(!isMatch) return res.status(400).send({message: "Wrong password"});

    user.token = nanoid();

    user.save().then((result) => {
        res.send(result);
    }).catch(err => {
        res.status(400).send({message: err});
    });
}
const logOut = async (req, res) => {
    const token = req.get("Authorization");
    const success = {message: "Logged out!"};
    if(!token) return res.send(success);

    const user = await User.findOne({token});
    if(!user) return res.send(success);

    user.token = nanoid();
    await user.save();

    res.send(success);
}

const registerUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    if (req.file) user.avatar = req.file.filename;

    user.save().then(result => {
        res.send(result);
    }).catch(err => {
        res.status(400).send({message: err});
    })
}

module.exports = {logIn, logOut, registerUser};