const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
app.use(cookieParser());
app.get("/", (req, res) => {
    res.cookie("name", "shredhaya");
    res.send("cookie has been settt");
})

app.get("/read", function (req, res) {
    res.send("read-pagee b");
    console.log(req.cookies);
})
bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("mynfdn", salt, function (err, hash) {
        // Store hash in your password DB.
        console.log(hash);
        console.log(salt);
    });
});

app.listen(3000);