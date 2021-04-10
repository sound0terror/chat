const path = require("path");

const rootPath = __dirname;

const config = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    db: {
        url: "mongodb://localhost/",
        name: "chat"
    },
    getDBPath: function() {
        return this.db.url + this.db.name;
    }
}

module.exports = config;
