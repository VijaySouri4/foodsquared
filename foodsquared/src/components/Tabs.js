import React, { useState, useRef, useEffect, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StoreInside from '../screens/StoreInside'
import { Feather } from '@expo/vector-icons'

const tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white'
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
  )
}

export default Tabs
