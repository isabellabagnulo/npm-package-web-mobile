//compontents
import ButtonComponent from "./ui/button/ButtonComponent"
import InputBox from "./ui/inputBox/InputBox"
import ModalComponent from "./ui/modal/ModalComponent"
import FlatListComponent from "./ui/flatList/FlatListComponent"

//screens
import Login from "./screens/login/Login"
import Rank from "./screens/rank/Rank"
import Result from "./screens/result/Result"
import Game from "./screens/game/Game"
//hooks
import useResponsive from "./hooks/useResponsive"

import userDuck from "./redux/ducks/userDuck"

export {
    ButtonComponent,
    FlatListComponent,
    InputBox,
    ModalComponent,
    Login,
    Rank,
    Result,
    useResponsive,
    Game,
    userDuck
}