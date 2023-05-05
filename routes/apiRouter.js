const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = 3001;

const app = express();

//for the post method
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//get method localhost:3001/api/notes
app.get('/api/notes', (req,res) =>
{ 
 //server send the data to client
  res.sendFile(path.join(__dirname, '../db/db.json'));
});
app.post('/api/notes', (req,res) =>
{
  //client add new data to server
  
});
