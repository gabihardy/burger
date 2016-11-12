var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "austin823", //Your password
    database: "burgers"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection successful");
})