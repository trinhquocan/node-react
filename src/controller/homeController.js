import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});


const handleHelloWork = (req, res) => {
    return res.render("home.ejs");
}
const handleUserPage = (req, res) => {
    return res.render("user.ejs");
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;




    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?,?,?)', [email, password, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log(results);
        }
    );
    // console.log("goi lai ne: ", req.body)
    return res.send("handleCreateNewUser");
}

module.exports = {
    handleHelloWork, handleUserPage, handleCreateNewUser
}