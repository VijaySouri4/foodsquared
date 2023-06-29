import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const OrLine = (props) => {
  const { placeholdertext, secureTextEntryFlag } = props
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          margin: 20,
          backgroundColor: '#D9D9D9',
          width: '35%',
          height: 2
        }}
      />
      <Text style={{ marginTop: 10, color: '#D9D9D9' }}>OR</Text>
      <View
        style={{
          margin: 20,
          backgroundColor: '#D9D9D9',
          width: '35%',
          height: 2
        }}
      />
    </View>
  )
}

export default OrLine
