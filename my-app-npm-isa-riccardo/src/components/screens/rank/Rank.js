import React from 'react'
import FlatListComponent from "../../ui/flatList/FlatListComponent"
import ButtonComponent from '../../ui/button/ButtonComponent'
import { Text, View, StyleSheet} from "react-native"
import PropTypes from "prop-types"
import useResponsive from '../../hooks/useResponsive'

import {commonStyles} from '../../style/commonStyle' 

function Rank(props) {
    console.log(props);
    let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

    function newGame(e) {
        if(!!props?.newGame){
            props.newGame(e)
        }
    }
    function newPlayers(e) {
        if(!!props?.newGame){
            props.newPlayers(e)
        }
    }

    function removeValue() {
        if(!!props.removeValue) {
            props.removeValue()
        }
    }


  return (
    <View style={[styles.container, commonStyles.screenContainer]}>
        <Text style={[commonStyles.h1, isDesktop ? commonStyles.h1Desktop : commonStyles.h1Mobile]}>Risultati</Text>
        <FlatListComponent list={props?.data}/>
        <View style={styles.contButton}>
            <ButtonComponent callbackPress={newGame} label={"Nuova Partita"} textColor="#fff" addStyles={{backgroundColor: "orange"}} />
            <ButtonComponent callbackPress={newPlayers} label={"Cambia Player"} />
        </View>
        <Text style={commonStyles.paragraph} onPress={removeValue}>Azzera classifica</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    },
    contButton:{
        flexDirection:"row",
        paddingVertical: 20
    }
})

Rank.propTypes={
    data: PropTypes.array,
    newGame: PropTypes.func,
    newPlayers: PropTypes.func
}

export default Rank