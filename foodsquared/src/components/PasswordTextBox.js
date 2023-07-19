import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TextBox = (props) => {
  const { placeholdertext, secureTextEntry = [false] } = props
  // console.log(flag)
  return (
    <View style={styles.root}>
      <View style={styles.rectangle$79}>
        <TextInput
          style={styles.firstName}
          secureTextEntry={true}
          placeholder={placeholdertext}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 329,
    height: 44,
    marginTop: 20
  },
  rectangle$79: {
    display: 'flex',
    flexDirection: 'column',
    width: 329,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  firstName: {
    height: 28,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#000000'
  }
})

export default TextBox
