import React, {useState} from 'react'
import { View, TextInput, StyleSheet} from "react-native"
import PropType from "prop-types"
import useResponsive from '../../hooks/useResponsive'

function InputBox(props) {
  // const [focus, setFocus] = useState(false)

  let [Mobile, Desktop, isMobile, isDesktop] = useResponsive()

    function handleText(e){
        if (!!props.callbackInput) {
            props.callbackInput(e)
          }
      
    }

    // function handleFocus() {
    //   setFocus(true)
    // }

    // function handleBlur() {
    //   setBorderCol("rgba(255, 255, 255, 0.3)")
    // }

  return (
    <View>
        <TextInput
          style={[styles.input, isDesktop ? styles.inputDesktop : styles.inputMobile, {borderColor: "rgba(255,255,255,0.3)"}]}
          selectionColor="orange"
          placeholder={props.placeholder}
          placeholderTextColor="#fff" keyboardType={props.type}
          onChangeText={handleText}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width:200,
      marginVertical: 5,
      marginHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
      color: "#fff"
    },
    inputMobile: {
      fontSize: 16,
      padding: 10,
    },
    inputDesktop: {
      fontSize: 18,
      padding: 15
    }
});

  InputBox.propTypes = {
    callbackInput: PropType.func,
    placeholder: PropType.string,
    type: PropType.string
  }
  InputBox.defaultProps = {
    callbackInput: undefined,
    placeholder: "",
    type: "default"
  }

export default InputBox