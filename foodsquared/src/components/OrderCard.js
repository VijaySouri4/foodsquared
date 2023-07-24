import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderCard = (props) => {
  const { purchaseDate, purchasePrice, storeName, status } = props
  const color_flag = status === 'complete' ? 'green' : 'red'

  return (
    <View style={styles.root}>
      <View style={[styles.rectanglecontainer, styles.shadowProp]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={styles.storeName}>{storeName}</Text>
          <Text>{`Ordered on: ${purchaseDate}`}</Text>
        </View>
        <Text>{`$${purchasePrice}`}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginLeft: 50
          }}
        >
          <Text style={{ fontWeight: 'bold', color: color_flag }}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
  root: {
    width: 326,
    height: 91,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  storeName: {
    marginTop: 10,
    fontSize: 20
  },
  logo: {
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  rectanglecontainer: {
    justifyContent: 'space-evenly',
    width: 326,
    height: 91,
    flexShrink: 0,
    backgroundColor: 'white',
    borderRadius: '10'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
})
