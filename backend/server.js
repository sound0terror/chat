const mongoose = require("mongoose");
const app = require("./src/app");
const PORT = 8888;
const users = require("./src/routes/user.route");
const messages = require("./src/routes/message.route");
const config = require("./config");

mongoose.connect(config.getDBPath(), {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongoose connected");
        app.use("/users", users());
        app.use("/messages", messages());
        app.listen(PORT, () => {
                console.log(`Server running on ${PORT} port`);
            }
        )
    })