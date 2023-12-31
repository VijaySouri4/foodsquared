import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const ProductCard = (props) => {
  const [count, setcount] = useState(0)
  const { name, sellbyDate, price, image } = props
  return (
    <View>
      <View style={[styles.container, styles.shadowProp]}>
        <Image source={{ uri: image }} style={styles.productimage} />
      </View>
      <View style={styles.info}>
        <Text style={styles.price}>{`$${price}`}</Text>
        <Text style={styles.Text}>{name}</Text>
        <Text style={styles.Text}>{`Best By: ${sellbyDate}`}</Text>
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
    justifyContent: 'center',
    borderRadius: 10
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

export default ProductCard
