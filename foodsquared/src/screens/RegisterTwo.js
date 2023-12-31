import React, { useState, useRef, useEffect, createRef } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Pressable
} from 'react-native'
import TextBox from '../components/TextInput'
import AppleLogin from '../components/AppleLoginButton'
import RegisterButton from '../components/RegisterButton'
import OrLine from '../components/OrLine'
import FacebookLogin from '../components/FacebookLogin'
import GoogleLogin from '../components/GoogleLogin'

const RegisterOne = ({ route, navigation }) => {
  const [newusers, setUsers] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confemail, setConfEmail] = useState('')
  const [confpassword, setConfPassword] = useState('')

  const { user, email, password } = route.params

  // const user = 'vijay'
  // const email = 'vijay@gmail'
  // const password = 'vijay123'

  useEffect(() => {
    console.log(`users are : ${newusers}`)
  }, [])

  const fetchData = async () => {
    if (password !== confpassword) {
      alert('Passwords do not match')
      return
    }
    if (email !== confemail) {
      alert('Emails do not match')
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
      const response = await fetch('http://192.168.137.252:3000/api/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          address: address,
          number: phoneNumber
        })
      })
      const json = await response.json()
      console.log(json)
      alert('User account created & signed in!')
      navigation.navigate('Product Page')
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={Styles.title}>Setting Up your Account</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        {/* <View style={[Styles.container, Styles.shadowProp]}>
        <TextInput
          placeholdertext={'Name'}
          // style={Styles.firstName}
          secureTextEntry
          onChangeText={setName}
          value={name}
        ></TextInput>
        <TextInput
          placeholdertext={'Address'}
          // style={Styles.firstName}
          secureTextEntry
          onChangeText={setAddress}
          value={address}
        ></TextInput>
        <TextInput
          placeholdertext={'Phone Number'}
          // style={Styles.firstName}
          secureTextEntry
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        ></TextInput>
        <TextInput
          placeholdertext={'Confirm Email'}
          // style={Styles.firstName}
          secureTextEntry
          onChangeText={setConfEmail}
          value={confemail}
        ></TextInput>
        <TextInput
          placeholdertext={'Confirm Password'}
          // style={Styles.firstName}
          secureTextEntry
          onChangeText={setConfPassword}
          value={confpassword}
        ></TextInput>
      </View> */}
        <View style={[Styles.container, Styles.shadowProp]}>
          <View style={Styles.root}>
            <View style={Styles.rectangle$79}>
              <TextInput
                style={Styles.firstName}
                onChangeText={setName}
                placeholder={'Name'}
                value={name}
              />
            </View>
          </View>
          <View style={Styles.root}>
            <View style={Styles.rectangle$79}>
              <TextInput
                style={[Styles.firstName]}
                onChangeText={setAddress}
                value={address}
                placeholder={'Address'}
              />
            </View>
          </View>
          <View style={Styles.root}>
            <View style={Styles.rectangle$79}>
              <TextInput
                style={[Styles.firstName]}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder={'Phone Number'}
              />
            </View>
          </View>
          <View style={Styles.root}>
            <View style={Styles.rectangle$79}>
              <TextInput
                style={[Styles.firstName]}
                onChangeText={setConfEmail}
                value={confemail}
                placeholder={'Confirm Email'}
              />
            </View>
          </View>
          <View style={Styles.root}>
            <View style={Styles.rectangle$79}>
              <TextInput
                style={[Styles.firstName]}
                onChangeText={setConfPassword}
                value={confpassword}
                placeholder={'Confirm Password'}
              />
            </View>
          </View>
        </View>
        <Pressable onPress={fetchData}>
          <View style={Styles.registration}>
            <RegisterButton title={'Register'}></RegisterButton>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1
    // justifyContent: 'center'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 329,
    height: 44,
    marginTop: 20
  },
  title: {
    fontStyle: 'italic',
    fontSize: 27,
    justifyContent: 'center',
    marginLeft: 30
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
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
  firstName: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#000000'
  },
  registration: {
    alignItems: 'center',
    margin: 30
  }
})

export default RegisterOne
