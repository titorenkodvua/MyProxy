const express = require("express");
const config = require('config')
const {createProxyMiddleware} = require("http-proxy-middleware");
const cors = require('cors');

const appProxy = express();
const API_SERVICE_URL = "https://sites.google.com";

const PORT = config.get('port') || 8000;
const HOST = config.get('host') || "localhost";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

module.exports.run = function () {
    appProxy.use(cors({
        exposedHeaders: '*'
    }));

    appProxy.use("/", createProxyMiddleware({
        target: API_SERVICE_URL,
        changeOrigin: true,
        ws: true,
        logLevel: "debug"
    }));

    appProxy.listen(PORT, HOST, () => {
        console.log(`Starting My proxy server at ${HOST}:${PORT}`)
    })

}