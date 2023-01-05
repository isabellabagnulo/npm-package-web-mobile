import React, { useState } from 'react';
import ButtonComponent from './components/ui/button/ButtonComponent';
import InputBox from './components/ui/inputBox/InputBox';
import ModalComponent from './components/ui/modal/ModalComponent';
import Rank from './components/screens/rank/Rank';
import Login from './components/screens/login/Login';
import Game from './components/screens/game/Game';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

import Result from './components/screens/result/Result';

const DATA = [
  {
    name:"Riccardo",
    score: 5
  },
  {
    name:"Isabella",
    score: 7
  },

];

let ScreenHeight = Dimensions.get("window").height;

function App() {
  const [state, setState] = useState({
  })

  return (
    <View style={styles.app} className="app">
      {/* <Rank data={DATA}/> */}
      {/* <Result/> */}
      {/* <Login /> */}
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
      flex: 1,
      height: ScreenHeight,
      backgroundColor: "black"
  },
})

export default App;
