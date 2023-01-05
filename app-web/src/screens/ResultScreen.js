import { Result } from "my-app-npm-isa-riccardo"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"

let playersHistory = [];

function ResultScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector((state)=>state.userDuck.user)

  function goToRank() {
    navigate("/ranking")
  }

  function goToGame() {
    navigate("/game")
  }

  function callbackPlayers(){

    if (!!localStorage.getItem("players")) {
      playersHistory = JSON.parse(localStorage.getItem("players"));
    }
    return playersHistory
  }

  function storagePlayers(playersHistory){
    localStorage.setItem("players", JSON.stringify(playersHistory));
  }

  function storage(win) {

    // let player = {
    //   name: user.name,
    //   email: user.email,
    //   wins:0,
    // }

    // if (!!localStorage.getItem("players")) {
    //   playersHistory = JSON.parse(localStorage.getItem("players"));
    // }

    // let index = playersHistory.findIndex((e)=>e.email === user.email)

    // if (index !== -1) {
    //   player.wins = playersHistory[index].wins + (win? 1 : 0)
    //   playersHistory[index] = player
    // } else {
    //   player.wins = win? 1 : 0
    //   playersHistory.push(player)
    // }

    // localStorage.setItem("players", JSON.stringify(playersHistory));

  }

  return (
    <>
      <Result
        data={location.state}
        goToRank={goToRank}
        newGame={goToGame}
        callbackPlayers={callbackPlayers}
        storagePlayers={storagePlayers}
      />
    </>
  )
}

export default ResultScreen
