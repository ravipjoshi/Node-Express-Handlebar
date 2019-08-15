/*

Host	ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
Username	hiwhxvpafpy5n2r2	
Password	py7wwy5y0bacxwz5	
Port	3306	
Database	hdzizzkfs9ubuaj0



*/

// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{

connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "P@ssword",
  database: "burger_db"
});

}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
