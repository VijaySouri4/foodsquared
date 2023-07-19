import React, { useState, useRef, useEffect, createRef } from 'react'
import LoginFirst from '../screens/LoginFirst'
import { NavigationContainer } from '@react-navigation/native'
import RegisterOne from '../screens/RegisterOne'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSecond from '../screens/LoginSecond'
import RegisterTwo from '../screens/RegisterTwo'
import StoreInside from '../screens/StoreInside'
import Tabs from './Tabs'

const stack = createNativeStackNavigator()

const Stack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        headerShown: false
      }}
    >
      <stack.Screen
        name="LoginFirst"
        component={LoginFirst}
        options={{ title: 'Login' }}
      />
      <stack.Screen
        name="RegisterOne"
        component={RegisterOne}
        options={{ title: 'Register' }}
      />
      <stack.Screen
        name="LoginSecond"
        component={LoginSecond}
        options={{ title: 'Login with Email' }}
      />
      <stack.Screen
        name="Product Page"
        component={Tabs}
        options={{ title: 'Browse products' }}
      />
    </stack.Navigator>
  )
}

export default Stack
