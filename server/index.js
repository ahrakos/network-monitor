const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const ping = require("ping");

const port = 9500;
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/api");
const events = require("./realtime/events");

app.use(cors());
app.use(bodyParser.json());

global.io = io;
global.hosts = [];
global.clients = [];
global.settings = {
    pingTimeInterval: 5
};

global.pingHosts = () => {
    global.mainInterval = setInterval(() => {
        for (host of hosts) {
            ping.promise.probe(host).then((res) => {
                console.log(res);
                if (res.time === "unknown") {
                    return;
                }

                io.emit("ip-result", {
                    host: res.host,
                    responseTime: res.time,
                    time: new Date(Date.now())
                });
            });
        }
    }, settings.pingTimeInterval * 1000);
};

routes(app);
events(io);

pingHosts();
http.listen(port);
