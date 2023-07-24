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

const StoreLogin = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = AUTH

  //   const handleSignIn = async () => {
  //     setLoading(true)
  //     try {
  //       const response = await signInWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       ).then((userCredential) => {
  //         // Signed in
  //         let user = userCredential.user
  //         // ...
  //       })

  //       alert(`User ${user} Signed in`)
  //     } catch (err) {
  //       console.log(err)
  //       setIsSignedIn(false)
  //       console.log(`SignedIN status is: ${isSignedIn}`)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   if (isSignedIn) {
  //     console.log(` TWO SignedIN status is: ${isSignedIn}`)
  //     navigation.navigate('Product Page')
  //   }

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(`The user Id is : ${user.uid}`)
  //       setIsSignedIn(true)
  //     } else {
  //       console.log(user)
  //     }
  //   })

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={{ justifyContent: 'center', flex: 0.1 }}>
        <Text style={Styles.title}>Partner Login</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 0.9
        }}
      >
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
        <View style={{ marginLeft: 30, marginTop: 10, flexDirection: 'row' }}>
          <Text style={{ fontSize: 12, color: 'darkorange' }}>
            Forgot Password?
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'darkorange',
              marginLeft: 60
            }}
            onPress={() => {
              navigation.navigate('Store Registration')
            }}
          >
            Register New Account
          </Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={Styles.registration}>
          <View style={Styles.loginRectangle}>
            <Text style={Styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
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

export default StoreLogin
