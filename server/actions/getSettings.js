const getSettings = (req, res) => {
    res.send(settings);
    res.end();
};

module.exports = getSettings;
