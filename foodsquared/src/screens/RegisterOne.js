import React, { useState, useRef, useEffect, createRef } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable
} from 'react-native'
import TextBox from '../components/TextInput'
import AppleLogin from '../components/AppleLoginButton'
import RegisterButton from '../components/RegisterButton'
import { Feather } from '@expo/vector-icons'
import OrLine from '../components/OrLine'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'
import { AUTH, provider } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithRedirect } from 'firebase/auth'

const RegisterOne = ({ navigation }) => {
  const [newusers, setUsers] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')
  const auth = AUTH

  useEffect(() => {
    console.log(`users are : ${newusers}`)
  }, [])

  const handleSignup = async () => {
    if (password !== confpassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      // const response = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // ).then((userCredential) => {
      //   let user = userCredential.user
      //   setUsers(user)
      //   console.log(`The user is : ${user}`)
      // })
      const response = await fetch(
        'http://192.168.137.252:3000/UserAuthentication/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: email,
            password: password
          })
        }
      )
      const json = await response.json()
      console.log(json)
      alert('User account created & signed in!')
      navigation.navigate('RegisterTwo', {
        user: newusers,
        email: email,
        password: password
      })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const googleSignUp = async () => {
    console.log('Inside Google Sign up')
    if (password !== confpassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      signInWithRedirect(auth, provider)
      // const response = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // ).then((userCredential) => {
      //   let user = userCredential.user
      //   setUsers(user)
      //   console.log(`The user is : ${user}`)
      // })
      alert('User account created & signed in!')
      navigation.navigate('RegisterTwo', {
        user: newusers,
        email: email,
        password: password
      })
    } catch (err) {
      console.log('Inside main catch')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={Styles.title}>Register</Text>
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
            {/* <Feather
              name={'lock'}
              size={25}
              color={'black'}
              style={{ marginTop: 10 }}
            /> */}
            <TextInput
              style={[Styles.firstName]}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              placeholder={'Password'}
            />
          </View>
        </View>
        <View style={Styles.root}>
          <View style={Styles.rectangle$79}>
            {/* <Feather
              name={'lock'}
              size={25}
              color={'black'}
              style={{ marginTop: 10 }}
            /> */}
            <TextInput
              style={[Styles.firstName]}
              secureTextEntry
              onChangeText={setConfPassword}
              value={confpassword}
              placeholder={'Confirm Password'}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleSignup} style={Styles.registration}>
        <View style={Styles.loginRectangle}>
          <Text style={Styles.buttonText}>Register</Text>
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
      <Pressable onPress={googleSignUp}>
        <View style={Styles.specialButton}>
          <GoogleLogin></GoogleLogin>
        </View>
      </Pressable>
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

export default RegisterOne
