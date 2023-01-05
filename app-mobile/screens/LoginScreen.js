import React, {useEffect} from "react"
import { Text, TextInput, View, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native"
import { Login } from "my-app-npm-isa-riccardo"

let ScreenHeight = Dimensions.get("window").height;

function LoginScreen({ navigation }) {

  function goToGame() {
    navigation.navigate("Game")
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      {/* <ScrollView style={styles.loginContainer}> */}
        <Login goTo={goToGame} />
        {/* <TextInput placeholder="ciao" placeholderTextColor={"red"}/> */}
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    // minHeight: ScreenHeight
  }
})

export default LoginScreen
