import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Pressable,
  Button
} from 'react-native'
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownPicker from 'react-native-dropdown-picker'
import CartProductCard from '../components/CartProductCard'
import { Divider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from '../../CartReducer'
import { CardField, useStripe } from '@stripe/stripe-react-native'

const PaymentScreen = () => {
  const { confirmPayment } = useStripe()
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(false)
  const API_URL = 'http://172.20.10.3:3000/payment'

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/paymentSheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { paymentIntent, ephemeralKey, customer } = await response.json()

    return {
      paymentIntent,
      ephemeralKey,
      customer
    }
  }

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams()

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe'
      }
    })
    if (!error) {
      setLoading(true)
    }
  }

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet()

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message)
    } else {
      Alert.alert('Success', 'Your order is confirmed!')
    }
  }

  useEffect(() => {
    initializePaymentSheet()
  }, [])
  return (
    // <CardField
    //   postalCodeEnabled={true}
    //   placeholders={{
    //     number: '4242 4242 4242 4242'
    //   }}
    //   cardStyle={{
    //     backgroundColor: '#FFFFFF',
    //     textColor: '#000000'
    //   }}
    //   style={{
    //     width: '100%',
    //     height: 50,
    //     marginVertical: 30
    //   }}
    //   onCardChange={(cardDetails) => {
    //     console.log('cardDetails', cardDetails)
    //   }}
    //   onFocus={(focusedField) => {
    //     console.log('focusField', focusedField)
    //   }}
    // />
    <SafeAreaView>
      <View style={{ backgroundColor: 'black' }}>
        <Button
          variant="primary"
          disabled={!loading}
          title="Checkout"
          onPress={openPaymentSheet}
        />
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen
