const express = require('express')
const mysql = require("mysql")

const app = express()
const port = 3000

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/'));
app.set("view engine", "ejs");


const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
});


app.get('/', (req, res) => {

    const sql = `INSERT INTO people(name) values('Leonardo Black')`
    connection.query(sql)

    connection.connect(function(err) {
        connection.query("SELECT * FROM people", function (err, result, fields) {
            res.render("index", {
                last_registry: result[result.length - 1]["name"],
                result_cont: result.length,
                result: result,
            });
        });
      });
})

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
})
