const fs = require('fs');//read & wriite file
const path = require('path')//load built-in path module
//path.join() to join path segments together


module.exports = (app) =>

{
  app.get('', (req,res) =>
  {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });
  app.post('',(req,res) => {

  });
  app.delete('', (req,res) =>
  {
    
  });
}