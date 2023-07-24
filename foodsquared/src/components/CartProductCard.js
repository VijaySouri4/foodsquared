import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const CartProductCard = (props) => {
  const [count, setcount] = useState(0)
  const { name, price, image, quantity } = props
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.shadowProp}>
          <Image source={{ uri: image }} style={styles.productimage} />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 40 }}>
          <Text style={styles.price}>{`$${price}`}</Text>
          <Text style={styles.Text}>{name}</Text>
          <Text style={styles.Text}>{quantity}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 147,
    height: 115,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    flexDirection: 'row',
    marginLeft: 40
  },
  productimage: {
    height: 100,
    width: 90
  },
  info: {
    // backgroundColor: '#FFFFFF'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  price: {
    fontSize: 20
  },
  Text: {
    fontSize: 12
  }
})

export default CartProductCard
