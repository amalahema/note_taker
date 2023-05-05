const fs = require('fs');//read & wriite file
const path = require('path')//load built-in path module

var uniqid = require('uniqid');

module.exports = (app) =>
{
 //when the client navigate to localhost:3001/api/notes the server sends the data from the db
  app.get('/api/notes', (req,res) =>
  {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });


  //when the client post new data its read,push to the existing data and the write to the file
  //localhost:3001/api/notes
    app.post('api/notes',(req,res) => {
    let db = fs.readFile('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(), //each note have unique id
    };  
    //Push the new data
    db.push(userNote);
    fs.writeFile('db/db.json', JSON.stringify(db));
    res.json(db);
  });

  app.delete('/api/notes/:id', (req,res) =>
  {
    let db = JSON.parse(fs.readFile('db/db.json'))
    // removing note with id
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // Rewriting note to db.json
    fs.writeFile('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
  });
};