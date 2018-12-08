const onConnectionHandler = (socket) => {
    console.log(socket.client.id);
    clients[socket.client.id] = true;

    socket.on("disconnect", () => {
        for (let id in clients) {
            if (id === socket.id) {
                delete clients[id];
                break;
            }
        }
    });
};

module.exports = onConnectionHandler;
