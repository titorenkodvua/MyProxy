const myProxy = require("./myproxy");
const express = require("express");
const app = express();

myProxy.run()


app.listen(8000, () => {
    console.log("App listening port 8000")
})