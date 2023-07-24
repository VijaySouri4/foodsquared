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
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../CartReducer'

const Product = ({ route, navigation }) => {
  const [cartValue, setCartValue] = useState(0)
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  console.log(cart)
  const {
    id,
    storeLogo,
    ProductName,
    ProductImage,
    ProductPrice,
    ProductSellByDate
  } = route.params
  const item = {
    id,
    storeLogo,
    ProductName,
    ProductImage,
    ProductPrice,
    ProductSellByDate
  }
  console.log(item.id, item.ProductName)
  const addItemToCart = (item) => {
    console.log(`adding ${item.ProductName} to cart`)
    dispatch(addToCart(item))
  }
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.ini}>
        <Text style={styles.headerText}>Product Details</Text>
        <Image
          source={{
            uri: ProductImage
          }}
          style={styles.productimage}
        />
        <Text style={styles.Text}>{ProductName}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.price}>{`$${ProductPrice}`}</Text>
        <Text style={styles.origprice}>{`Original Price: $3.00`}</Text>
        <Text style={styles.sale}>{`50% Sale`}</Text>
        <Text style={styles.Text}>{`Best By: ${ProductSellByDate}`}</Text>
      </View>

      {cart.some((value) => value.id === id) ? (
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              setCartValue(cartValue - 1)
              removeItemFromCart(item)
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>
              Remove from Cart
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              setCartValue(cartValue + 1)
              addItemToCart(item)
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Add to Bag</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setCartValue(cartValue + 1)
            addItemToCart(item)
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Add to Bag</Text>
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.cartpreview}>
        <Text>Currntly in Cart</Text>
        <TextInput editable={false}>{item.quantity}</TextInput>
      </View> */}
    </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF'
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
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
