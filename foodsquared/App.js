import React, { useState, useRef, useEffect, createRef } from 'react'
import LoginFirst from './src/screens/LoginFirst'
import { NavigationContainer } from '@react-navigation/native'
import RegisterOne from './src/screens/RegisterOne'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginSecond from './src/screens/LoginSecond'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StoreInside from './src/screens/StoreInside'
import { Feather } from '@expo/vector-icons'

const stack = createNativeStackNavigator()
const tab = createBottomTabNavigator()

const getIsSignedIn = () => {
  return true
}

const App = () => {
  const isSignedIn = getIsSignedIn()

  return (
    <NavigationContainer>
      {isSignedIn ? (
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
        </stack.Navigator>
      ) : (
        <tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
              backgroundColor: 'green'
            }
          }}
        >
          <tab.Screen
            name={'StoreInside'}
            component={StoreInside}
            options={{
              title: 'Products',
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={'droplet'}
                  size={25}
                  color={focused ? 'tomato' : 'black'}
                />
              )
            }}
          />
        </tab.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App
