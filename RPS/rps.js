const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)


app.get('/:move', (req, res) => {

  let userMove = req.params.move
  let allMoves = ["rock", "paper", "scissors"]
  let aiMove = allMoves[Math.floor(Math.random() * 3)]

// console.log(userMove);
// {"user":"rock","ai":"rock","result":"tie"}
  if(userMove === aiMove){
      res.send({user:userMove, ai:aiMove, result:"TIE!"})
    } else if (userMove === "paper" && aiMove === "rock"){
      res.send({user: userMove, ai: aiMove, result:"User Wins!"})
    } else if (userMove === "scissors" && aiMove === "paper"){
      res.send({user: userMove, ai: aiMove, result:"User Wins!"})
    } else if (userMove === "rock" && aiMove === "scissors"){
      res.send({user: userMove, ai: aiMove, result:"User Wins!"})
    } else if (aiMove === "paper" && userMove === "rock"){
      res.send({ai: aiMove, user: userMove, result:"Computer Wins!"})
    } else if (aiMove === "scissors" && userMove === "paper"){
      res.send({ai: aiMove, user: userMove, result:"Computer Wins!"})
    } else if (aiMove === "rock" && userMove === "scissors"){
      res.send({ai: aiMove, user: userMove, result:"Computer Wins!"})
    }

})


app.listen(8000, () => {
  console.log("You are listening to port 8000")
})
