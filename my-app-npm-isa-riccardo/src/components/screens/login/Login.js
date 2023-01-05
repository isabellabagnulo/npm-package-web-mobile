import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types"

import useResponsive from '../../hooks/useResponsive'
import { useDispatch } from 'react-redux'
import {setUser} from '../../redux/ducks/userDuck'

import InputBox from '../../ui/inputBox/InputBox'
import ButtonComponent from '../../ui/button/ButtonComponent'

import {commonStyles} from '../../style/commonStyle' 


let name = "";
let email = "";


console.log("obj login",name,email)

function Login(props) {
    const [state, setState] = useState({
        errorName: false,
        errorEmail: false
    })

    const dispatch = useDispatch()

    let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

    function getName(e) {
        name = e
    }

    function getEmail(e) {
        email = e
    }

    function startGame() {
        // setState({
        //     ...state,
        //     errorName: checkText(obj.name)

        // })
        // if(!checkText(obj.name) && !checkEmail(obj.email)){
        //     props.storage(obj)
        //     props.goTo()
        // }

        dispatch(setUser(
        {
            user: {
                name:name,
                email:email,
            }
        }
        ))
        props.goTo()
        
    }

    // const checkText = (value) => {
    //     const re = /^[a-z ,.'-]+$/i;
    //     let ok = re.exec(value);
    //     return !!ok ? true : false;
    // }
    // const checkEmail = (email) => {
    //     const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    //     let ok = re.exec(email);
    //     return !!ok ? true : false;
    // }

  return (
    <View style={[styles.login, commonStyles.screenContainer, isDesktop ? styles.loginDesktop : styles.loginMobile]}>

        <View style={styles.header}>
            <Text style={[commonStyles.h1, isDesktop ? commonStyles.h1Desktop : commonStyles.h1Mobile ]}>Morra cinese</Text>
            <Text style={[commonStyles.paragraph, isDesktop ? commonStyles.paragraphDesktop : commonStyles.paragraphMobile]}>Inserisci il nome e la mail per giocare</Text>
        </View>

        <View style={[styles.form, isDesktop ? styles.formDesktop : styles.formMobile ]}>
            <InputBox placeholder="Nome" callbackInput={getName} />
            <InputBox placeholder="Email" callbackInput={getEmail} />
            <ButtonComponent label='Start' textColor="#fff" callbackPress={startGame} addStyles={styles.buttonLogin} />
        </View>

    </View>
  )
}

Login.propTypes = {
    goTo: PropTypes.func
}

Login.defaultProps = {
    goTo: undefined
}

const styles = StyleSheet.create({
    login: {
        alignItems: "center",
        justifyContent: "center"
    },
    loginMobile: {
        padding: 20
    },
    loginDesktop: {
        padding: 100
    },
    header: {
        alignItems: "center",
        paddingBottom: 50
    },
    buttonLogin: {
        borderWidth: 4,
        borderColor: "orange",
        backgroundColor: "orange"
    }
})

export default Login