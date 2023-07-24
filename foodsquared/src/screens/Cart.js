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
  Pressable
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
import { StripeProvider } from '@stripe/stripe-react-native'
import { CardField, useStripe } from '@stripe/stripe-react-native'

const DATA = [
  {
    name: 'Cheetos',
    sellbyDate: 'August 21st',
    price: 2.2,
    quantity: 1,
    image:
      'https://www.syracuse.com/resizer/ScBnLXa5CZKGWOxFaGc-KzxbGXs=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/movies_impact/photo/cheetosjpg-17f6656eaa47f24f.jpg'
  },
  {
    name: 'Bananas',
    sellbyDate: 'July 30',
    price: 0.7,
    quantity: 7,
    image:
      'https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png'
  },
  {
    name: 'Broccoli',
    sellbyDate: 'July 31',
    price: 1.1,
    quantity: 2,
    image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c1ff.png'
  }
]

const carDATA = [
  {
    ProductImage:
      'https://www.syracuse.com/resizer/ScBnLXa5CZKGWOxFaGc-KzxbGXs=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/movies_impact/photo/cheetosjpg-17f6656eaa47f24f.jpg',
    ProductName: 'Cheetos',
    ProductPrice: 2.2,
    ProductSellByDate: 'August 21s',
    id: '1',
    quantity: 1,
    storeLogo: 'foodsquared/assets/storelogo.png'
  },
  {
    ProductImage:
      'https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png',
    ProductName: 'Bananas',
    ProductPrice: 0.7,
    ProductSellByDate: 'July 30',
    id: '2',
    quantity: 1,
    storeLogo: 'foodsquared/assets/storelogo.png'
  },
  {
    ProductImage:
      'https://assets.stickpng.com/images/580b57fcd9996e24bc43c1ff.png',
    ProductName: 'Broccoli',
    ProductPrice: 1.1,
    ProductSellByDate: 'July 31',
    id: '3',
    quantity: 1,
    storeLogo: 'foodsquared/assets/storelogo.png'
  }
]

const Cart = ({ navigation }) => {
  const [SubTotal, setSubTotal] = useState(0)
  const [Tax, setTax] = useState(0)
  const [Total, setTotal] = useState(0)
  const [cartValue, setCartValue] = useState(0)
  // const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(false)
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const API_URL = 'http://172.20.10.3:3000/payment'

  console.log(`Logging cart value here:`)
  console.log(cart)

  useEffect(() => {
    setSubTotal(() => {
      let sum = 0
      cart.forEach((item) => {
        sum += item.ProductPrice * item.quantity
      })
      return sum
    })
    setTax(() => {
      return SubTotal * 0.07
    })
    setTotal(() => {
      return SubTotal + Tax
    })
  }, [cart])

  const addItemToCart = (item) => {
    console.log(`adding ${item.ProductName} to cart`)
    dispatch(addToCart(item))
  }
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  const decrementItemInCart = (item) => {
    dispatch(decrementQuantity(item))
  }
  const incrementItemInCart = (item) => {
    dispatch(incrementQuantity(item))
  }

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

  const Item = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CartProductCard
          name={item.ProductName}
          price={item.ProductPrice}
          image={item.ProductImage}
          quantity={item.quantity}
        />
        <TouchableOpacity
          onPress={() => {
            // item.quantity = item.quantity + 1
            incrementItemInCart(item)
          }}
          style={styles.smallbutton}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // item.quantity = item.quantity - 1
            decrementItemInCart(item)
          }}
          style={styles.smallbutton}
        >
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.cartpreview}>
        <Text style={styles.headerText}>Cart</Text>
      </View>
      <View style={styles.itemcontainer}>
        <FlatList
          data={cart}
          renderItem={({ item }) => {
            console.log(item)
            return <Item item={item} />
          }}
        />
      </View>
      <View>
        <Divider bold={true} style={styles.line} />
      </View>
      <View>
        <Text style={styles.headerText}>{`SubTotal: $${SubTotal}`}</Text>
        <Text style={styles.headerText}>{`TAX: $${Tax}`}</Text>
        <Text style={styles.headerText}>{`Total: $${Total}`}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setCartValue(cartValue + 1)
            // navigation.navigate('PaymentScreen')
            openPaymentSheet()
            // openPaymentSheet()
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  itemcontainer: {
    marginTop: 40,
    marginLeft: 20,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    marginTop: 40,
    marginBottom: 40
  },
  ini: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20
  },
  productimage: {
    marginTop: 40,
    height: 311,
    width: 334,
    resizeMode: 'contain'
  },
  smallbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#519571',
    height: 20,
    width: 20,
    borderRadius: 0
  },
  info: {
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 40
  },
  price: { fontSize: 20 },
  origprice: { fontSize: 15, textDecorationLine: 'line-through' },
  sale: { fontSize: 15, color: 'red' },
  Text: { fontSize: 20 },
  button: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#519571',
    height: 50,
    width: '80%',
    borderRadius: 30,
    marginLeft: 40
  },
  cartpreview: {
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
