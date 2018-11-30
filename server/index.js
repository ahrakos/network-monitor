const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const ping = require("ping");

const port = 9500;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let hosts = [];
let clients = [];

app.post("/hosts/add", (req, res) => {
    let added = [];
    for (let ip of req.body.hosts) {
        if (hosts.indexOf(ip) !== -1) {
            continue;
        }

        added.push(ip);
        hosts.push(ip);
    }

    res.send(added);
    res.end();
});

io.on("connection", (socket) => {
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
});

setInterval(() => {
    for (host of hosts) {
        ping.promise.probe(host).then((res) => {
            console.log(res);
            io.emit("ip-result", {
                host: res.host,
                responseTime: res.time,
                time: new Date(Date.now())
            });
        });
    }
}, 5000);

http.listen(port);
