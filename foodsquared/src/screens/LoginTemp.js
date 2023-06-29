import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const LoginTemp = () => {
  return (
    <View style={styles.root}>
      <View style={styles.signUpLogin} />
      <Text style={styles.or}>{`or`}</Text>
      <View style={styles.rectangle$38} />
      <View style={styles.rectangle$39} />
      <Text style={styles.continueAsGuest}>{`Continue as Guest`}</Text>
      <View style={styles.food1$3Copy$2$2} />
      <View style={styles.smallsignuptemp}>
        <View style={styles.rectangle$55} />
        <Text style={styles.signUp}>{`Sign up`}</Text>
      </View>
      <View style={styles.smalllogintemp}>
        <View style={styles.rectangle$56} />
        <Text style={styles.login}>{`Login`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#519671'
  },
  signUpLogin: {
    display: 'flex',
    flexDirection: 'column'
  },
  or: {
    height: 18,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff'
  },
  rectangle$38: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 2
  },
  rectangle$39: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 2
  },
  continueAsGuest: {
    height: 16,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    textDecorationLine: 'underline',
    color: '#ffffff'
  },
  food1$3Copy$2$2: {
    display: 'flex',
    flexDirection: 'column',
    width: 311,
    height: 408
  },
  smallsignuptemp: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 41
  },
  rectangle$55: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 41,
    borderRadius: 10
  },
  signUp: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff'
  },
  smalllogintemp: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 41
  },
  rectangle$56: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 41,
    borderRadius: 10
  },
  login: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff'
  }
})

export default LoginTemp
