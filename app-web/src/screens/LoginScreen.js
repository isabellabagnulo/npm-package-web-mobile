import {Login} from 'my-app-npm-isa-riccardo'

import {useNavigate} from 'react-router-dom'

function LoginScreen() {
  const navigate = useNavigate()

  function goToResult() {
    navigate("/game")
  }

  return (
    <>
      <Login goTo={goToResult} />
    </>
  )
}

export default LoginScreen
