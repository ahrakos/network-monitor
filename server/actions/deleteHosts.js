const deleteHosts = (req, res) => {
    let host = req.params.host;
    let index = -1;
    if ((index = hosts.indexOf(host)) === -1) {
        res.status(403);
        res.send({
            error: "no_such_host"
        });

        res.end();
        return;
    }

    hosts.splice(index, 1);
    res.end();
};

module.exports = deleteHosts;
