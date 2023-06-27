import React, { useState, useRef, useEffect, createRef } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Switch,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.logo}>
        <Text>Food Squared</Text>
      </View>
      <View style={Styles.container}>
        <Text style={Styles.username}>User Name</Text>
        <Text style={Styles.pwd}>Password</Text>
      </View>
      <View style={Styles.smallwrapper}>
        <Text style={Styles.forgot_pwd}>forgot Password</Text>
        <Text style={Styles.signup}>SignUp?</Text>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#519671',
    flex: 1
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  username: {
    color: 'black',
    fontSize: 30
  },
  pwd: {
    color: 'black',
    fontSize: 30
  },
  forgot_pwd: {
    color: 'black',
    fontSize: 20
  },
  signup: {
    color: 'black',
    fontSize: 20
  },
  smallwrapper: {
    flex: 0.2,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Page_styleLoginEmail
