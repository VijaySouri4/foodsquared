import React, { useState, useRef, useEffect, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Stack from './src/components/Stack'
import { useCheckLogin } from './src/hooks/useCheckLogin'
import RegisterOne from './src/screens/RegisterOne'
import RegisterTwo from './src/screens/RegisterTwo'
import LoginFirst from './src/screens/LoginFirst'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterFirebase from './src/screens/RegisterFirebase'

const stack = createNativeStackNavigator()

const App = () => {
  const [isSignedIn] = useCheckLogin(true)
  //{isSignedIn ? <Tabs /> : <Stack />}

  return (
    <NavigationContainer>
      {isSignedIn ? <Tabs /> : <Stack />}
    </NavigationContainer>
  )
}

export default App
