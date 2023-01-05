import React from 'react'
import {Result} from 'my-app-npm-isa-riccardo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from "react-redux"

let playersHistory = []

function ResultScreen({navigation, route}) {
  const points = route.params

  // let user = useSelector((state) => state.userDuck.user)

  function goToRank() {
    navigation.navigate("Rank")
  }

  function goToGame() {
    navigation.navigate("Game")
  }

  async function callbackPlayers (){
    try {
      const value = await AsyncStorage.getItem('players')
      if(value !== null) {
        playersHistory = JSON.parse(value)
      }
    } catch(e) {
      console.log(e)
    }
    return playersHistory
  }

  async function storagePlayers(playersHistory){
    try {
      const jsonValue = JSON.stringify(playersHistory)
      await AsyncStorage.setItem('players', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }
  
  // const getData = async () => {
  //   // try {
  //   //   const value = await AsyncStorage.getItem('players')
  //   //   if(value !== null) {
  //   //     playersHistory = JSON.parse(value)
  //   //   }
  //   // } catch(e) {
  //   //   console.log(e)
  //   // }
  // }

  // const storeData = async (value) => {
  //   // try {
  //   //   const jsonValue = JSON.stringify(value)
  //   //   await AsyncStorage.setItem('players', jsonValue)
  //   // } catch (e) {
  //   //   console.log(e)
  //   // }
  // }

  // ----------------------

  // async function storage(win) {
  //   await getData()

  //   // let player = {
  //   //   name: user.name,
  //   //   email: user.email,
  //   //   wins: 0
  //   // }

  //   // const findPlayer = playersHistory.findIndex((player) => player.email === user.email)

  //   // if(findPlayer !== -1) {
  //   //   player.wins = playersHistory[findPlayer].wins + (win ? 1 : 0)
  //   //   playersHistory.splice(findPlayer, 1 , player)
  //   // } else {
  //   //   player.wins = win ? 1 : 0
  //   //   playersHistory.push(player)
  //   // }
  //   // console.log("user wins",player)
  //   storeData(playersHistory)
  // }

  return (
    <>
        <Result
          data={points}
          goToRank={goToRank} 
          newGame={goToGame}
          callbackPlayers={callbackPlayers}
          storagePlayers={storagePlayers}
          />
    </>
  )
}

export default ResultScreen