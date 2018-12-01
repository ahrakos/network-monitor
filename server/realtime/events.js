const onConnectionHandler = require("./handlers/connection");

const events = (io) => {
    io.on("connection", onConnectionHandler);
};

module.exports = events;
