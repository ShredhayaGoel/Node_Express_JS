const express = require("express");

const app = express();

const cookieparser = require("cookie-parser");

const path = require("path");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");



const usermodel = require("./models/user.js");

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cookieparser());

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/create", (req, res) => {

    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let createduser = await usermodel.create({
                username,
                email,
                password: hash,
                age

            })

            let token = jwt.sign({
                email
            }, "khdshfh");
            // Store hash in your password DB.

            res.cookie("token", token);
            res.send(createduser);

        });
    });



});




app.listen(3000);
