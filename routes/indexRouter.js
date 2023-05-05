const path = require('path');
module.exports = (app) =>
{ //localhost:3001/notes
  app.get('/notes' ,(req,res) =>
  {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  //localhost:3001/
  app.get('/' , (req,res) =>
  {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};