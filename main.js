const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


app.use(cookieParser());

app.get("/", (req, res) => {

    //  res.cookie("name", "shredhaya");

    let token = jwt.sign(

        {
            email: "shredhayagoel@gmail.com"
        },
        "secret"
    );

    res.cookie("token", token);

    res.send("cookie has been settt");
    //  res.send("done");

})

app.get("/read", function (req, res) {

    res.send("read-pagee b");

    console.log(req.cookies);

    let data = jwt.verify(req.cookies.token, "secret");
    console.log("data", data);

})

bcrypt.genSalt(10, function (err, salt) {

    bcrypt.hash("mynfdn", salt, function (err, hash) {

        // Store hash in your password DB.

        console.log(hash);

        console.log(salt);
    });
});

app.listen(3000);