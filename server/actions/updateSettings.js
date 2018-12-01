const updateSettings = (req, res) => {
    let updateSettings = req.body.settings;

    Object.assign(settings, updateSettings);

    clearInterval(mainInterval);
    pingHosts();

    res.send(settings);
    res.end();
};

module.exports = updateSettings;
