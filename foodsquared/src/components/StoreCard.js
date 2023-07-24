import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StoreCard = (props) => {
  const { storeName, itemCount, storeImage, distance, status } = props
  const color_flag = status === 'open' ? 'green' : 'red'

  return (
    <View style={styles.root}>
      <View style={[styles.rectanglecontainer, styles.shadowProp]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image style={styles.logo} source={{ uri: storeImage }} />
          <View>
            <Text style={styles.storeName}>{storeName}</Text>
            <Text>{`${itemCount} items`}</Text>
          </View>
        </View>
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
          <Text>{`${distance} km`}</Text>
        </View>
      </View>
    </View>
  )
}

export default StoreCard

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
