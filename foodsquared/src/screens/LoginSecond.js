import React, { useState, useRef, useEffect, createRef } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import TextBox from '../components/TextInput'
import AppleLogin from '../components/AppleLoginButton'
import RegisterButton from '../components/RegisterButton'
import OrLine from '../components/OrLine'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'
import { AUTH } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

const LoginSecond = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(false)
  const auth = AUTH

  const handleSignIn = async () => {
    setLoading(true)
    try {
      console.log('hello')
      const response = await fetch(
        'http://192.168.137.252:3000/UserAuthentication/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: 'kparth10',
            password: '100'
          })
        }
      )
      const json = await response.json()
      console.log(json)
      json != ' ' ? setIsSignedIn(true) : setIsSignedIn(false)
      // const response = fetch('http://192.168.1.13:3000/api')
      // const json = await response.json()
      // console.log(json)
      setUser(json)

      // isSignedIn ? alert(`User ${user} Signed in`) : alert('User not found')
    } catch (err) {
      console.log(err)
      setIsSignedIn(false)
      console.log(`SignedIN status is: ${isSignedIn}`)
    } finally {
      setLoading(false)
    }
  }
  //https://jsonplaceholder.typicode.com/users
  // const test = async () => {
  //   try {
  //     const response = await fetch('http://192.168.1.13:3000/api')
  //     const json = await response.json()
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  if (isSignedIn) {
    console.log(` TWO SignedIN status is: ${isSignedIn}`)
    navigation.navigate('Product Page')
  }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(`The user Id is : ${user.uid}`)
  //     setIsSignedIn(true)
  //   } else {
  //     console.log(user)
  //   }
  // })

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={Styles.title}>Login</Text>
      </View>
      <View style={[Styles.container, Styles.shadowProp]}>
        <View style={Styles.root}>
          <View style={Styles.rectangle$79}>
            <TextInput
              style={Styles.firstName}
              onChangeText={setEmail}
              placeholder={'Email'}
              value={email}
            />
          </View>
        </View>
        <View style={Styles.root}>
          <View style={Styles.rectangle$79}>
            <TextInput
              style={Styles.firstName}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              placeholder={'Password'}
            />
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 30, marginTop: 10 }}>
        <Text style={{ fontSize: 12, color: 'darkorange' }}>
          Forgot Password?
        </Text>
      </View>
      <TouchableOpacity onPress={handleSignIn} style={Styles.registration}>
        <View style={Styles.loginRectangle}>
          <Text style={Styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 329,
    height: 44,
    marginTop: 20
  },
  loginRectangle: {
    width: 329,
    height: 41,
    borderRadius: 10,
    backgroundColor: '#EAAE54',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  rectangle$79: {
    display: 'flex',
    flexDirection: 'column',
    width: 329,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  buttonText: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: 'black'
  },
  firstName: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#000000'
  },
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
