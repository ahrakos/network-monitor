const addHosts = require("../actions/addHosts");
const deleteHosts = require("../actions/deleteHosts");
const getSettings = require("../actions/getSettings");
const updateSettings = require("../actions/updateSettings");
const getWebapp = require("../actions/getWebapp");
const express = require("express");
const path = require("path");

const routes = (app) => {
    app.get("/", getWebapp);
    app.post("/hosts", addHosts);
    app.delete("/hosts/:host", deleteHosts);
    app.get("/settings", getSettings);
    app.post("/settings", updateSettings);
};

module.exports = routes;
