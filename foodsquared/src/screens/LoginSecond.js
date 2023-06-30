import React, { useState, useRef, useEffect, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import TextBox from '../components/TextInput'
import AppleLogin from '../components/AppleLoginButton'
import RegisterButton from '../components/RegisterButton'
import OrLine from '../components/OrLine'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'

const LoginSecond = () => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={Styles.title}>Login</Text>
      </View>
      <View style={[Styles.container, Styles.shadowProp]}>
        <TextBox placeholdertext={'Email'}></TextBox>
        <TextBox placeholdertext={'Password'} secureTextEntry={true}></TextBox>
      </View>
      <View style={{ marginLeft: 30, marginTop: 10 }}>
        <Text style={{ fontSize: 12, color: 'darkorange' }}>
          Forgot Password?
        </Text>
      </View>
      <View style={Styles.registration}>
        <RegisterButton title={'Login'}></RegisterButton>
      </View>
      <View style={{ alignItems: 'center' }}>
        <OrLine></OrLine>
      </View>
      <View style={Styles.specialButton}>
        <AppleLogin></AppleLogin>
      </View>
      <View style={Styles.specialButton}>
        <FacebookLogin></FacebookLogin>
      </View>
      <View style={Styles.specialButton}>
        <GoogleLogin></GoogleLogin>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontStyle: 'italic',
    fontSize: 27,
    justifyContent: 'center',
    marginLeft: 30
  },
  registration: {
    alignItems: 'center',
    margin: 30
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  container_ver: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  specialButton: {
    alignItems: 'center',
    marginTop: 15
  }
})

export default LoginSecond
