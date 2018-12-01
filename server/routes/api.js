const addHosts = require("../actions/addHosts");
const deleteHosts = require("../actions/deleteHosts");
const getSettings = require("../actions/getSettings");
const updateSettings = require("../actions/updateSettings");

const routes = (app) => {
    app.post("/hosts", addHosts);
    app.delete("/hosts/:host", deleteHosts);
    app.get("/settings", getSettings);
    app.post("/settings", updateSettings);
};

module.exports = routes;
