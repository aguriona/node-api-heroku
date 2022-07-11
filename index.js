const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json")


app.get("/", (req, res)=>{
    res.send("Helloooo");
})

app.get("/players", (req, res)=> {
    res.send(importData);
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})