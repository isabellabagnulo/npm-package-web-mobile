import React from "react"
import { Game } from "my-app-npm-isa-riccardo"
import { Text } from "react-native"

function GameScreen({navigation}) {

  function endGame(points) {
    navigation.navigate("Result", {points: points})
  }

  return <Game endGame={endGame} />
}

export default GameScreen
