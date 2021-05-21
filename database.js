//Create a connection from JS to MySQL. This is the Connection Object which will be used by Main.js during query.
//used for Exporting (from server mysql) and Importing (into javascript)


const mysql = require("mysql");

var properties = {
    host: "fintechsg08.mysql.database.azure.com",
    port: 3306,
    user: "fintechlab@fintechsg08",
    password: "FinTechSG2021",
    database: "market",
  };
  
  //create a connection object
  // takes a property file and creates a connection object

  var connection = mysql.createConnection(properties);  //mysql is a library
  connection.connect((errors) => {
    if (errors) {
      console.log("Couldn't connect to the MySQL Server. Error: " + errors);
    } else {
      console.log("Connected to MySQL successfully!");
    }
  });

//to keep connection alive so as not to get the Econreset error.
  setInterval(() => {
    connection.query("select 1");
  }, 60 * 1000);

  module.exports = { connection }; //this is for EXPORTING
  