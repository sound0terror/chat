const express = require("express");
const auth = require("../middlewares/auth");
const {getAllMessages, createMessage} = require("../controllers/message.controller");
const router = express.Router();

const createRouter = () => {
    router.get("/", auth, getAllMessages);
    router.post("/", auth, createMessage);


    return router;
}


module.exports = createRouter;