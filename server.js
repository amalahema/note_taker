const express = require('express');//express framework act as server
const path = require('path');//require is build in function
const fs = require("fs");

const port =3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use (express.static(__dirname));//any file in the project directory can be accessed by the serve

app.listen(PORT, function()
    {
       console.log("App Listening " + PORT);    
    });
