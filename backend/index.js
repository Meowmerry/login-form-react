const express = require("express");
const { validateUsernameAndPassword } = require("./helperFunctions");
const mongoose = require("mongoose");
const { userModel, Todomodel } = require("./models/Usermodel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
var cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

// Register Route




app.post("/register", validateUsernameAndPassword, async (req, res) => {
    const { username, password } = req.body;
    // Check if the username already exists
    const user = await userModel.findOne({ username });
    if (user) {
        return res.status(400).json({ msg: "Username already exists" })
    }
    // Hash the password
    const hashedPassword = await argon2.hash(password);
    const newUser = new userModel({ username, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ msg: "success" })

})

app.post("/login", validateUsernameAndPassword, async (req, res) => {
    const { username, password } = req.body;
    // Check if the username already exists
    const user = await userModel.findOne({ username });
    if (!user) {
        return res.status(400).send("Username does not exist");
    }

    // Check if the password is correct
    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
        return res.status(400).send("Password is incorrect");
    }
    console.log(user);

    //Create a json web token
    const token = jwt.sign({ _id: user._id }, "secret");


    return res.status(200).json({ token })

})

app.get("/userdetails", async (req, res) => {
    // Get the token from the user
    const token = req.headers.authorization;
    // Verify the token
    const decoded = jwt.verify(token, "secret");
    console.log(decoded)
    // Find the user
    const user = await userModel.findOne({ _id: decoded._id });
    user.password = undefined;
    return res.status(200).json({ user });

})

const startApplication = async () => {
    await mongoose.connect("mongodb+srv://testuserlogin:helloworld@cluster0.8crm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    app.listen(8000, () => console.log("Server started"));

}

startApplication();
