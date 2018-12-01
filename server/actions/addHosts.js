const addHosts = (req, res) => {
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
};

module.exports = addHosts;
