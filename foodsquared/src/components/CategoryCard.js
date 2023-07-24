import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const CategoryCard = (props) => {
  const [count, setcount] = useState(0)
  const { name, image } = props
  return (
    <View>
      <View style={[styles.container, styles.shadowProp]}>
        <Image source={{ uri: image }} style={styles.productimage} />
        <Text style={styles.Text}>{name}</Text>
      </View>
      <View style={styles.info}></View>
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
    alignItems: 'center'
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

export default CategoryCard
