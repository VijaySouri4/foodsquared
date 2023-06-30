import React, { useState, useRef, useEffect, createRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import SmallLogin from '../components/SmallLogin'
import SmallSignup from '../components/SmallSignup'
import OrLine from '../components/OrLine'
import PressableSmallButton from '../components/PressableSmallLogin'

const LoginFirst = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.wrapper}>
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
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#519671',
    flex: 1
  },
  image: {
    alignSelf: 'center'
    //alignItems: 'center'
    //justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default LoginFirst
