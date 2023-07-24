import React, { useState, useRef, useEffect, createRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import StoreSummary from './StoreSummary'
import StoreInventory from './StoreInventory'
import StoreAccount from './StoreAccount'
import StoreOrderHistory from './StoreOrderHistory'

const tab = createBottomTabNavigator()

const StoreTabs = () => {
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
        name={'Store Summary'}
        component={StoreSummary}
        options={{
          title: 'info',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'info'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'Store inventory'}
        component={StoreInventory}
        options={{
          title: 'Inventory',
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'database'}
              size={25}
              color={focused ? '#519671' : 'black'}
            />
          )
        }}
      />
      <tab.Screen
        name={'Store Account'}
        component={StoreAccount}
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
        name={'StoreOrderHistory'}
        component={StoreOrderHistory}
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

export default StoreTabs
