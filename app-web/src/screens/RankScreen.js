import { Rank } from "my-app-npm-isa-riccardo"
import { useNavigate } from "react-router-dom"

function RankScreen() {
  const navigate = useNavigate()

  function goToGame() {
    navigate("/game")
  }

  function goToLogin() {
    navigate("/")
  }

  function removeValue() {
    localStorage.removeItem('players')
  }

  let data = JSON.parse(localStorage.getItem("players"))

  return (
    <>
      <Rank data={data} newGame={goToGame} newPlayers={goToLogin} removeValue={removeValue} />
    </>
  )
}

export default RankScreen
