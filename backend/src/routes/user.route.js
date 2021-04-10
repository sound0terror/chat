const multer = require("multer");
const config = require("../../config");
const path = require("path");
const express = require("express");
const {nanoid} = require("nanoid");
const {registerUser, logOut, logIn} = require("../controllers/user.controller");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const createRouter = () => {
    router.post('/', upload.single("avatar"), registerUser);
    router.post('/sessions', logIn);
    router.delete('/sessions', logOut);

    return router;
}

module.exports = createRouter;