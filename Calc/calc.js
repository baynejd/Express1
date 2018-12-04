const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.get("/add/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (!isNaN(num1) && !isNaN(num2)) {
    function add(num1, num2) {
      return num1 + num2;
    }
    res.send({
      num1: num1,
      num2: num2,
      result: add(parseInt(num1), parseInt(num2))
    });
  } else {
    res.send("Enter a NUMBER");
  }
});

app.get("/sub/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (!isNaN(num1) && !isNaN(num2)) {
    function subtract(num1, num2) {
      return num1 - num2;
    }
    res.send({
      num1: num1,
      num2: num2,
      result: subtract(Number(num1), Number(num2))
    });
  } else {
    res.send("Enter a NUMBER");
  }
});

app.get("/div/:num1/:num2/", (req, res) => {
  const { num1, num2 } = req.params;
  if (!isNaN(num1) && !isNaN(num2)) {
    function divide(num1, num2) {
      return num1 / num2;
    }
    res.send({
      num1: num1,
      num2: num2,
      result: divide(Number(num1), Number(num2))
    });
  } else {
    res.send("Enter a NUMBER");
  }
});

app.get("/mul/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  if (!isNaN(num1) && !isNaN(num2)) {
    function multiply(num1, num2) {
      return num1 * num2;
    }
    res.send({
      num1: num1,
      num2: num2,
      result: multiply(parseInt(num1), parseInt(num2))
    });
  } else {
    res.send("Enter a NUMBER");
  }
});

app.listen(2000, () => {
  console.log("You are listening to port 2000");
});

//ruebenprophet
