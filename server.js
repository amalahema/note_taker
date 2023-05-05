//imports the Express.js library into your code.
const express = require('express');

//create an object app to define routes,middleware & other configurations that we apply in your application
const app =express();


// creating environment variable port
const PORT = process.env.PORT || 3001;

//when server get the request the server will serve that static file to the client.e.x index.html 
app.use(express.static('public'));// public is the directory name,so the client access all the file comes under the public directory by the navigating the particular url

//Format the data 
app.use(express.urlencoded({ extended: true }));//parse the data and make it available in the req.body
app.use(express.json());//client(json string) changed to js object(server)

//require load external modules 
require('./routes/apiRoutes')(app);// line is used to import the routes defined in the apiRoutes.js file and make them available in the app object(express) in the server.js file.
require('./routes/htmlRoutes')(app);

//server open at the particular port
app.listen(PORT, () => {
    console.log(`Server  Listening to    ${PORT}`);// string interpolation
  });