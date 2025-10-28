const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // for get middleware
app.use(express.json()); // for post middleware

app.get("/", (req, res) => {
  res.send("hello world");
});

const users = [
  { id: 1, name: "Abul", email: "abul@gmail.com" },
  { id: 2, name: "Kabul", email: "kabul@gmail.com" },
  { id: 3, name: "Chabul", email: "chabul@gmail.com" },
  { id: 4, name: "Jabul", email: "jabul@gmail.com" },
];

// api for get data
app.get("/users", (req, res) => {
  res.send(users);
});

// user data post to server
app.post("/users", (req, res) => {
  console.log("post method called", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser)
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
