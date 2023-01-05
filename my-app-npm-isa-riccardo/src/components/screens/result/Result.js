import React, { useState , useEffect} from 'react'
import ButtonComponent from '../../ui/button/ButtonComponent'
import { View, StyleSheet, Text} from "react-native"
import PropTypes from "prop-types"
import { useSelector } from 'react-redux'

import useResponsive from '../../hooks/useResponsive'
import { commonStyles } from '../../style/commonStyle'

function Result(props) {
    const [state,setState] = useState({
        win:false,
        text: "",
        label: ""
    })

    let user = useSelector((state) => state.userDuck.user)

    let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

    function newGame(e) {
        if(!!props.newGame){
            props.newGame(e)
        }
    }
    function goToRank(e) {
        if(!!props.newGame){
            props.goToRank(e)
        }
    }

   useEffect(()=>{
        let text = "";
        let win = false;
        let label = ""

        console.log("props",props);
        if(props?.data?.points?.user > props?.data?.points?.cpu){
            //vittoria
            text = `${user?.name} sei riuscito a battere la CPU. Complimenti!!`
            win = true
            label = "VITTORIA"
        }else if (props?.data?.points?.user === props?.data?.points?.cpu){
            //pareggio
            text =  `${user?.name} hai pareggiato. Riprova!!!`
            win = false
            label = "PAREGGIO"
        }else{
            //sconfitta
            text =  `${user?.name} non sei riuscito a vincere. Riprova!!!`
            win = false
            label = "SCONFITTA"
        }

        setState({
            ...state,
            text: text,
            win: win,
            label: label
        })

        storage(win)
    },[])

    async function storage(win) {

        let player = {
          name: user.name,
          email: user.email,
          wins:0,
        }
    
        let playersHistory = await props.callbackPlayers()
        console.log("playersHistory result",playersHistory);
    
        let index = playersHistory.findIndex((e)=>e.email === user.email)
    
        if (index !== -1) {
          player.wins = playersHistory[index].wins + (win? 1 : 0)
          playersHistory[index] = player
        } else {
          player.wins = win? 1 : 0
          playersHistory.push(player)
        }

        await props.storagePlayers(playersHistory)
    
    }


  return (
    <View style={[styles.container, commonStyles.screenContainer]}>
        <View style={styles.contText}>
            <Text style={[
                commonStyles.h1, isDesktop ? commonStyles.h1Desktop : commonStyles.h1Mobile,
                {color: state.label === "VITTORIA" ? "green" : state.label === "PAREGGIO" ? "white" : "red"}
            ]}>{state.label}</Text>  
            <Text style={[commonStyles.paragraph, isDesktop ? commonStyles.paragraphDesktop : commonStyles.paragraphMobile]}>{state.text}</Text>
        </View>

        <View style={styles.resultBox}>
            <Text style={
                [
                    commonStyles.h2, isDesktop ? commonStyles.h2Desktop : commonStyles.h2Mobile,
                ]
            }>{props?.data?.points?.cpu} - {props?.data?.points?.user}</Text>
        </View>
        
        <View style={styles.contButton}>
            <ButtonComponent callbackPress={newGame} label={"Nuova Partita"} textColor="#fff" addStyles={{backgroundColor: "orange"}} />
            <ButtonComponent callbackPress={goToRank} label={"Classifica"}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: "center"
    },
    contButton:{
        flexDirection:"row"
    },
    contText:{
        alignItems:"center",
    },
    resultBox: {
        borderColor: "orange",
        borderWidth: 4,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        marginVertical: 50
    }
})

Result.propTypes={
    data: PropTypes.object,
    goToRank: PropTypes.func,
    newGame: PropTypes.func,
    callbackPlayers: PropTypes.func,
    storagePlayers: PropTypes.func
    // storage: PropTypes.func
}

export default Result