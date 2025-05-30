const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "voting_system",
};

const conn = mysql.createConnection(dbConfig);

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    return;
  }
  console.log("Connected to database.");
});

module.exports = (query, values = []) => {
  return new Promise((resolve, reject) => {
    conn.query(query, values, (err, result) => {
      if (err) {
        console.error("Query Error:", err.message);
        reject(err); // eto lang ang kailangan, wag mag-throw
        return;
      }
      resolve(result);
    });
  });
};
