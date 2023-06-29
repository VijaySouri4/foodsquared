import React, { useState, useRef, useEffect, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import TextInput from '../components/TextInput'
import TextBox from '../components/TextInput'
import AppleLogin from '../components/AppleLoginButton'
import RegisterButton from '../components/RegisterButton'
import OrLine from '../components/OrLine'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'

const RegisterOne = () => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <Text style={Styles.title}>Sign Up</Text>
      <View style={[Styles.container, Styles.shadowProp]}>
        <TextBox placeholdertext={'First Name'}></TextBox>
        <TextBox placeholdertext={'Last Name'}></TextBox>
        <TextBox placeholdertext={'Email'}></TextBox>
        <TextBox placeholdertext={'Phone Number'}></TextBox>
        <TextBox placeholdertext={'Password'} secureTextEntry={true}></TextBox>
      </View>
      <View style={Styles.registration}>
        <RegisterButton></RegisterButton>
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
    fontSize: 27
    //alignItems: 'center'
    //justifyContent: 'center'
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

export default RegisterOne