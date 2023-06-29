import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const SmallSignup = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle$55}>
        <Text style={styles.signUp}>{`Sign up`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: 137,
    height: 41
  },
  rectangle$55: {
    width: 137,
    height: 41,
    borderRadius: 10,
    backgroundColor: '#EAAE54',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  signUp: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: 'white'
  }
})

export default SmallSignup
