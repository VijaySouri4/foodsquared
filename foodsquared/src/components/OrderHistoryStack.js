import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect, createRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StoreList from '../screens/StoreList'
import ProductsList from '../screens/ProductsList'
import ProductCategories from '../screens/ProductCategories'
import Product from '../screens/Product'
import OrderHistory from '../screens/OrderHistory'
import HistoryCart from '../screens/HistoryCart'

const stack = createNativeStackNavigator()

const OrderHistoryStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        headerShown: false
      }}
    >
      <stack.Screen
        name="Order History"
        component={OrderHistory}
        options={{ title: 'Order History' }}
      />
      <stack.Screen
        name="HistoryCart"
        component={HistoryCart}
        options={{ title: 'Order Details' }}
      />
    </stack.Navigator>
  )
}

export default OrderHistoryStack
