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

const HistoryCart = ({ navigation }) => {
  const [cartValue, setCartValue] = useState(0)
  const Item = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CartProductCard
          name={item.name}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
        />
        <TouchableOpacity
          onPress={() => {
            item.quantity = item.quantity + 1
          }}
          style={styles.smallbutton}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            item.quantity = item.quantity - 1
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
        <Text style={styles.headerText}>Order Details</Text>
      </View>
      <View style={styles.itemcontainer}>
        <FlatList
          data={DATA}
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
        <Text style={styles.headerText}>SubTotal: $5.00</Text>
        <Text style={styles.headerText}>TAX: $5.00</Text>
        <Text style={styles.headerText}>{`Total: $${cartValue}`}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            setCartValue(cartValue + 1)
          }}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HistoryCart

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
