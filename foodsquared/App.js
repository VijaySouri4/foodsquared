import React, { useState, useRef, useEffect, createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Stack from './src/components/Stack'
import { useCheckLogin } from './src/hooks/useCheckLogin'
import RegisterOne from './src/screens/RegisterOne'
import RegisterTwo from './src/screens/RegisterTwo'
import LoginFirst from './src/screens/LoginFirst'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterFirebase from './src/screens/RegisterFirebase'
import StoresLocationView from './src/screens/StoresLocationView'
import { Provider } from 'react-redux'
import store from './store'
import PaymentScreen from './src/screens/PaymentScreen'
import { StripeProvider } from '@stripe/stripe-react-native'

const stack = createNativeStackNavigator()

const App = () => {
  const [isSignedIn] = useCheckLogin(true)
  //{isSignedIn ? <Tabs /> : <Stack />}

  return (
    <StripeProvider publishableKey="pk_test_51NO9sUC3YreHlxPxQ6UFvFSKg4bY2D6DdlKW2F3bsGtH80xz3IgTu0pKYC1WtGx2B8FJYx85IXu2vV2piOn1CWPk00EaCpVpCu">
      <Provider store={store}>
        <NavigationContainer>
          {/* {isSignedIn ? <Tabs /> : <Stack />} */}
          {/* <StoresLocationView /> */}
          {/* <Tabs /> */}
          <Stack />
          {/* <RegisterTwo /> */}
          {/* <PaymentScreen /> */}
        </NavigationContainer>
      </Provider>
    </StripeProvider>
  )
}

export default App
