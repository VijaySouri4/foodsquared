import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect, createRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../screens/Cart'
import PaymentScreen from '../screens/PaymentScreen'

const stack = createNativeStackNavigator()

const AccountStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        headerShown: false
      }}
    >
      <stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
      <stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ title: 'Payment Screen' }}
      />
    </stack.Navigator>
  )
}

export default AccountStack

const styles = StyleSheet.create({})
