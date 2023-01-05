import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom"
import {Provider} from 'react-redux'

import LoginScreen from './screens/LoginScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from "./screens/ResultScreen"
import RankScreen from "./screens/RankScreen"

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/game" element={<GameScreen/>} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/ranking" element={<RankScreen />} />
      </Routes>
    </div>
  );
}

export default App;
