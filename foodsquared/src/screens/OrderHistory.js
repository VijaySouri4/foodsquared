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
import OrderCard from '../components/OrderCard'
import { Divider } from 'react-native-paper'

const DATA = [
  {
    purchaseDate: 'July 22',
    purchasePrice: 1.1,
    storeName: 'Bravo Super Stores',
    status: 'pending'
  },
  {
    purchaseDate: 'July 12',
    purchasePrice: 67.2,
    storeName: 'Bravo Super Stores',
    status: 'complete'
  },
  {
    purchaseDate: 'June 4',
    purchasePrice: 6.1,
    storeName: 'Walmart Edison',
    status: 'complete'
  },
  {
    purchaseDate: 'March 10',
    purchasePrice: 43.1,
    storeName: '7-11 George Street',
    status: 'complete'
  },
  {
    purchaseDate: 'January 1',
    purchasePrice: 21.7,
    storeName: 'Bravo Super Stores',
    status: 'complete'
  }
]

const OrderHistory = ({ navigation }) => {
  const [res, setRes] = React.useState([])

  const sendData = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.13:3000/api/orderHistory`,
        {
          method: 'GET'
        }
      )
      let json = await response.json()
      console.log(json)
      setRes(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    sendData()
  }, [])

  const Item = ({ item }) => (
    <View style={styles.productcardcontainer}>
      <View style={styles.cartbutton}></View>
      <Pressable
        onPress={() => {
          navigation.navigate('HistoryCart')
        }}
        style={{ marginTop: 20 }}
      >
        <OrderCard
          purchaseDate={item.purchaseDate}
          purchasePrice={item.purchasePrice}
          storeName={item.storeName}
          status={item.status}
        />
      </Pressable>
    </View>
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.smallcontainer}>
        <Text style={{ fontSize: 20 }}>Order History</Text>
        <Divider bold={true} style={styles.line} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => {
            // console.log(item)
            return <Item item={item} />
          }}
          // numColumns={1}
          style={styles.flatlist}
        />
      </View>
    </SafeAreaView>
  )
}

export default OrderHistory

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    //backgroundColor: '#F5F5F5'
    backgroundColor: '#FFFFFF'
  },
  line: {
    marginBottom: 40
  },
  container: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'black'
  },
  smallcontainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
