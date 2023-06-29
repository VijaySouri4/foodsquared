import React, { useState, useRef, useEffect, createRef } from 'react'
import LoginFirst from './src/screens/LoginFirst'
import { NavigationContainer } from '@react-navigation/native'
import RegisterOne from './src/screens/RegisterOne'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="LoginFirst" component={LoginFirst} />
        <stack.Screen name="RegisterOne" component={RegisterOne} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App
