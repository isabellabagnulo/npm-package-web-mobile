import React, { useState, useEffect, useRef  } from "react"
import { Animated, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import PropTypes from "prop-types"
import {useSelector} from 'react-redux'
import useResponsive from "../../hooks/useResponsive"

import ButtonComponent from "../../ui/button/ButtonComponent"
import matrix from "../../utils/rules"
import ModalComponent from "../../ui/modal/ModalComponent"
import HandButton from "../../ui/handButton/HandButton"

import rock from '../../assets/images/rock.png'
import paper from '../../assets/images/paper.png'
import scissor from '../../assets/images/scissor.png'

import { fadeIn, fadeOut, growth } from "../../utils/animations"

import {commonStyles} from '../../style/commonStyle'

let randomMove = 0
let lastMove = 0
let moveUser = null
let moveUser2 = null

function Game(props) {
  const [state, setState] = useState({
    moves: {
      user: null,
      cpu: null,
    },
    points: {
      user: 0,
      cpu: 0,
    },
    attempts: 0,
    result: {},
    openModal: false,
    buttonDisabled:false,
  })

  let user = useSelector((state) => state.userDuck.user)
  let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

  let resendMessage = true



   //web Socket
   const ws = new WebSocket("wss://socketsbay.com/wss/v2/1/7f110bf7a02974b4295c97425c7827ee/");

 
   ws.onopen = (event) => {
     console.log("Connessione")
   };
 
   ws.onmessage = function (event) {

     moveUser2 = event.data


   if (moveUser !== null && moveUser2 !== null && resendMessage) {
      resendMessage = false
      ws.send(moveUser);
      let result = matrix[moveUser][moveUser2]
      console.log(result);
      console.log("player1: ",moveUser, "player2: ",event.data);



      setState({
        ...state,
        attempts: state.attempts + 1,
        moves :{
          user: moveUser,
          cpu: moveUser2
        },
        result: result,
        buttonDisabled :true,
        openModal: true
      })
      console.log("moveuser", moveUser, "moveUser2", moveUser2)
      moveUser = null
      moveUser2 = null
      console.log("moveuser", moveUser, "moveUser2", moveUser2)
    }
    //  const json = JSON.parse(event.data);
    //  try {
    //    if ((json.event === "data")) {
    //     console.log("web socket message: ",json);
    //    }
    //  } catch (err) {
    //    console.log(err);
    //  }
   };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});
  // console.log("growAnim",fadeAnim)

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const getRandomMove = () => {
    randomMove = Math.floor(Math.random() * 3)
    if(lastMove !== randomMove) {
      lastMove = randomMove
    } else {
      randomMove = getRandomMove()
    }
    return randomMove
  }


  const closeModal = () => {
    console.log("state closeModal", state);
    
    setState({
      ...state,
      moves:{
        user:null,
        cpu:null
      },
      points:{
        user: state.points.user + state.result.userPoint,
        cpu: state.points.cpu + state.result.cpuPoint,
      },
      openModal: false,
      buttonDisabled: false
    })
  }



  //end Game
  useEffect(()=>{
    console.log("useEffect state",state);
    if(state.attempts === 3 && !state.openModal){
      let points = state.points
      
      setState({
        moves:{
          user:null,
          cpu:null
        },
        points:{
          user: 0,
          cpu: 0,
        },
        attempts:0,
        openModal: false,
        buttonDisabled: false,
      })

      props.endGame(points)
    } else if (state.attempts !== 0 && state.openModal){
      fadeIn(fadeAnim, openModal)
    }
  }, [state.openModal])

  const openModal = () =>{
    fadeOut(fadeAnim, closeModal)
  }

  const getMove = (e) => () => {

    // let randomMove = getRandomMove()

    // let result = matrix[e][randomMove]
    resendMessage = true
    moveUser = e

    ws.send(JSON.stringify(e));

    // setState({
    //   ...state,
    //   attempts: state.attempts + 1,
    //   moves :{
    //     user: e,
    //     cpu: randomMove
    //   },
    //   result: result,
    //   buttonDisabled :true,
    //   openModal: true
    // })
  }

  return (
    <View style={[styles.container, commonStyles.screenContainer]}>
      
      <View style={styles.cardPlayer}>
        <Text style={[
          commonStyles.paragraph,
          isDesktop ? commonStyles.paragraphDesktop : commonStyles.paragraphMobile,
          {paddingBottom: 20}
        ]}>CPU</Text>
        <View style={styles.buttonContainer}>

          <HandButton hand={paper} disabled={state.buttonDisabled} growAnim={animation} active={state.moves.cpu === 0}/>
          <HandButton hand={scissor} disabled={state.buttonDisabled} growAnim={animation} active={state.moves.cpu === 1}/>
          <HandButton hand={rock} disabled={state.buttonDisabled} growAnim={animation} active={state.moves.cpu === 2}/>

        </View>
      </View>

      <View style={styles.score}>
        <Text style={styles.scoreText}>{state.points.cpu} - {state.points.user}</Text>
      </View>

      <View style={styles.cardPlayer}>
        <View style={styles.buttonContainer}>
          
          <HandButton hand={paper} disabled={state.buttonDisabled} active={state.moves.user === 0} callbackPress={getMove(0)}/>
          <HandButton hand={scissor} disabled={state.buttonDisabled} active={state.moves.user === 1} callbackPress={getMove(1)}/>
          <HandButton hand={rock} disabled={state.buttonDisabled} active={state.moves.user === 2} callbackPress={getMove(2)}/>

        </View>
        <Text style={[commonStyles.paragraph, {paddingTop: 20}]}>{user?.name}</Text>
      </View>

      <ModalComponent fadeAnim={fadeAnim} isOpen={state.openModal}>
        <Text
          style={[
            commonStyles.modalText,
            isDesktop ? commonStyles.modalTextDesktop : commonStyles.modalTextMobile,
            state?.result?.label === "Hai perso" ? {color: "red"} : 
            state?.result?.label === "Hai vinto" ? {color: "green"} : {}
          ]}
        >{state?.result?.label}</Text>
        {!!state?.result?.gif && 
          <Image style={{height: 150, width: 150}} resizeMode="contain" source={state.result.gif} />
        }
      </ModalComponent>
      
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardPlayer: {
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  score: {
    borderColor: "orange",
    borderWidth: 4,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  scoreText: {
    fontSize: 30,
    color: "white"
  },
})

Game.propTypes = {
  endGame: PropTypes.func
}

Game.defaultProps = {
  endGame: undefined
}

export default Game
