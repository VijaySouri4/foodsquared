import React, { useState, useRef, useEffect, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import SmallLogin from '../components/SmallLogin'
import SmallSignup from '../components/SmallSignup'
import OrLine from '../components/OrLine'
import PressableSmallButton from '../components/PressableSmallLogin'
import { useLogin } from '../hooks/useLogin'
import { Line } from 'react-native-svg'
import { useCheckLogin } from '../hooks/useCheckLogin'

const LoginFirst = ({ navigation }) => {
  //const [newusers] = useLogin()

  return (
    <SafeAreaView style={Styles.wrapper}>
      <View
        style={{
          backgroundColor: '#519671',
          justifyContent: 'center',
          flex: 4
        }}
      >
        <Image
          source={require('../../assets/favicon.png')}
          style={Styles.image}
        />
        <View style={Styles.container}>
          <PressableSmallButton
            title={'Sign Up'}
            navigation={navigation}
            navigatingpage={['RegisterOne']}
          ></PressableSmallButton>
          <PressableSmallButton
            title={'Log In'}
            navigation={navigation}
            navigatingpage={['LoginSecond']}
          ></PressableSmallButton>
        </View>
        <View style={{ alignItems: 'center' }}>
          <OrLine></OrLine>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={Styles.redirectText}
            onPress={() => navigation.navigate('Product Page')} // CHANGE THIS TO NAVIGATE TO THE STORE PAGE INSTEAD OF MAPS
          >
            Continue as Guest
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: '#519671',
          flex: 0.1
        }}
      >
        <Text
          style={Styles.redirectText}
          onPress={() => {
            navigation.navigate('Store Login')
          }}
        >
          Store Login
        </Text>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#519671'
    //justifyContent: 'center'
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  redirectText: {
    color: '#ffffff',
    textDecorationLine: 'underline'
  }
})

export default LoginFirst
