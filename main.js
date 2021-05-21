const database = require("./database");  //import the file database.js and create the dependency. (just like html, css and js)


// query(what query to run, what to do with the results -> callback function)
//this query below will return a JSON object (separate by commas)
database.connection.query( //connection here means 'what is inside the connection object'
"select * from seller",
    (errors, results) => {
        if (errors){
            console.log("Errors: " + errors);
        }
        else{
            console.log(results);
        }
    });

//---
//creating placeholders to store variable so as these variables can come from anywhere to accept parameters from API.


var name = "Jon";
var balance = 20000;

database.connection.query(
  `insert into seller (seller_name, seller_wallet) values ('${name}','${balance}')`,
  (errors, results) => {
    if (errors) {
      console.log("Errors: " + errors);
    } else {
      console.log(results);
    }
  }
);

