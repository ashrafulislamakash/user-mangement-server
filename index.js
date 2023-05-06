const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "abudllah", email: "abdullah@gmail.com" },
  { id: 2, name: "sumi", email: "sumi@gmail.com" },
  { id: 3, name: "ashraful", email: "ashraful@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Mangement Server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post APi Hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is Running on Port : ${port}`);
});
