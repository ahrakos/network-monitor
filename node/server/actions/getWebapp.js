const path = require("path");

const getWebapp = (req, res) => {
    res.sendfile(path.resolve(__dirname, "../webapp/dist/index.html"));
};

module.exports = getWebapp;
