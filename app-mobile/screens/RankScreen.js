import React, {useState, useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Rank } from "my-app-npm-isa-riccardo"

function RankScreen({ navigation }) {
  const [state, setState] = useState({
    data: [],
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("players")
      console.log("value",value)
      if (value !== null) {
        let players = JSON.parse(value)
        setState({
          data: players,
        })
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  function goToLogin() {
    navigation.navigate("Login")
  }
  
  function goToGame() {
    navigation.navigate("Game")
  }

  function removeItem() {
    removeValue().then(() => { console.log('removed')})
  }

  const removeValue = async () => {
    try {
      const value = await AsyncStorage.clear()
      console.log("remove item value", value)
      setState({
        data: [],
      })
    } catch (e) {
      // remove error
    }

    console.log("Done.")
  }

  return (
    <>
      <Rank
        data={state.data}
        newPlayers={goToLogin}
        newGame={goToGame}
        removeValue={removeItem}
      />
    </>
  )
}

export default RankScreen
