// import modules
const express = require("express");
const mongodb = require('./connections/mongoDB');
const routes = require('./routes/index')

// initializations 
const app = express();
const port = 3000;
mongodb.connectToMongoDB();

app.use('/',routes);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
