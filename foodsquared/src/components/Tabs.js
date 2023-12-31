import React, { useState, useRef, useEffect, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StoreInside from '../screens/StoreInside'
import { Feather } from '@expo/vector-icons'
import StoresLocationView from '../screens/StoresLocationView'
import StoreList from '../screens/StoreList'
import InternalStack from './InternalStack'
import Cart from '../screens/Cart'
import CustomerAccount from '../screens/CustomerAccount'
import OrderHistory from '../screens/OrderHistory'
import OrderHistoryStack from './OrderHistoryStack'
import AccountStack from './AccountStack'
import CartStack from './CartStack'

const tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <tab.Screen
        name={'Map'}
        component={StoresLocationView}
        options={{
          title: 'Map',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'map'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'Storelist'}
        component={InternalStack}
        options={{
          title: 'List',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'list'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'CustomerAccount'}
        component={AccountStack}
        stack
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'user'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'Cart'}
        component={CartStack}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'shopping-cart'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'OrderHistory'}
        component={OrderHistoryStack}
        options={{
          title: 'OrderHistory',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'file-text'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
    </tab.Navigator>
  )
}

export default Tabs
