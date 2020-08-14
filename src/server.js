const app = require('./app');
const db = require('./database/connection');

app.listen(process.env.PORT || 3000);

db
  .authenticate()
  .then( () => {
    console.log("sucessful connection with db");
  }).catch(err => {
    console.error("error try to connect to db");
  });


