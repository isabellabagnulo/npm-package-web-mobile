import React from 'react'
import {Game} from 'my-app-npm-isa-riccardo'
import {useNavigate} from 'react-router-dom'

function GameScreen() {
  const navigate = useNavigate()

  function endGame(points){
    navigate("/result", {state: {points: points}})
  }

  return (
    <Game endGame={endGame}/>
  )
}

export default GameScreen