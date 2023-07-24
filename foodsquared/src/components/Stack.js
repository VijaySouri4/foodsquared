import React, { useState, useRef, useEffect, createRef } from 'react'
import LoginFirst from '../screens/LoginFirst'
import { NavigationContainer } from '@react-navigation/native'
import RegisterOne from '../screens/RegisterOne'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSecond from '../screens/LoginSecond'
import RegisterTwo from '../screens/RegisterTwo'
import StoreInside from '../screens/StoreInside'
import Tabs from './Tabs'
import MapView from '../screens/StoresLocationView'
import StoreLogin from '../screens/StoreLogin'
import StoreRegistration from '../screens/StoreRegistration'
import StoreTabs from '../screens/StoreTabs'

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
      <stack.Screen
        name="MapView"
        component={MapView}
        options={{ title: 'Store Locations' }}
      />
      <stack.Screen
        name="RegisterTwo"
        component={RegisterTwo}
        options={{ title: 'Complete Registration' }}
      />
      <stack.Screen
        name="Store Login"
        component={StoreLogin}
        options={{ title: 'Store Login' }}
      />
      <stack.Screen
        name="Store Registration"
        component={StoreRegistration}
        options={{ title: 'Store Registration' }}
      />
      <stack.Screen
        name="Store Tabs"
        component={StoreTabs}
        options={{ title: 'Store Tabs' }}
      />
    </stack.Navigator>
  )
}

export default Stack
