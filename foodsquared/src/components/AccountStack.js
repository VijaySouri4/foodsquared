import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect, createRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomerAccount from '../screens/CustomerAccount'
import LoginFirst from '../screens/LoginFirst'
import Stack from './Stack'

const stack = createNativeStackNavigator()

const AccountStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        headerShown: false
      }}
    >
      <stack.Screen
        name="Customer Account"
        component={CustomerAccount}
        options={{ title: 'Customer Details' }}
      />
      <stack.Screen
        name="Login First"
        component={Stack}
        options={{ title: 'Logged Out' }}
      />
    </stack.Navigator>
  )
}

export default AccountStack

const styles = StyleSheet.create({})
