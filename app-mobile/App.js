import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"
import store from "./redux/store"

import { StyleSheet, KeyboardAvoidingView, SafeAreaView, View } from "react-native"

import LoginScreen from "./screens/LoginScreen"
import GameScreen from "./screens/GameScreen"
import RankScreen from "./screens/RankScreen"
import ResultScreen from "./screens/ResultScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Rank" component={RankScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  )
}
