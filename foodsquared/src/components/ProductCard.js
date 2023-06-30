import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ProductCard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle$2} />
      <View style={styles.rectangle$1} />
      <Text style={styles.aloozSpanishTomatoPotatoChips$25Gm}>
        {`Alooz Spanish Tomato Potato Chips 25 gm `}
      </Text>
      <Text style={styles.$182}>{`৳182`}</Text>
      <View style={styles.buttonswebsolidtextSymbolsymbolText}>
        <View style={styles.frame$4}></View>
        <Text style={styles.buttonText}>{`Add to Bag`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 164,
    height: 293
  },
  rectangle$2: {
    display: 'flex',
    flexDirection: 'column',
    width: 164,
    height: 135,
    borderRadius: 9
  },
  rectangle$1: {
    display: 'flex',
    flexDirection: 'column',
    width: 115,
    height: 121,
    borderRadius: 9
  },
  aloozSpanishTomatoPotatoChips$25Gm: {
    height: 42,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#000000'
  },
  $182: {
    height: 24,
    letterSpacing: 0.6000000238418579,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: 'tomato'
  },
  buttonswebsolidtextSymbolsymbolText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    width: 164,
    height: 35,
    paddingVertical: 12,
    paddingHorizontal: 17,
    backgroundColor: 'green',
    borderRadius: 7
  },
  frame$4: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 4
  },
  buttonText: {
    height: 18,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'right',
    textAlignVertical: 'top',
    color: 'white'
  }
})

export default ProductCard
