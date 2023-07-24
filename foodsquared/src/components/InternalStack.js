import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef, useEffect, createRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StoreList from '../screens/StoreList'
import ProductsList from '../screens/ProductsList'
import ProductCategories from '../screens/ProductCategories'
import Product from '../screens/Product'

const stack = createNativeStackNavigator()

const InternalStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardShadowEnabled: true,
        headerShown: false
      }}
    >
      <stack.Screen
        name="StoreList"
        component={StoreList}
        options={{ title: 'Stores List' }}
      />
      <stack.Screen
        name="ProductsList"
        component={ProductsList}
        options={{ title: 'Product List' }}
      />
      <stack.Screen
        name="ProductCategories"
        component={ProductCategories}
        options={{ title: 'ProductCategories' }}
      />
      <stack.Screen
        name="Product"
        component={Product}
        options={{ title: 'Product Info' }}
      />
    </stack.Navigator>
  )
}

export default InternalStack

const styles = StyleSheet.create({})
