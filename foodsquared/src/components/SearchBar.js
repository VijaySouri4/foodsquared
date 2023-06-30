import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle$113}>
        <TextInput
          placeholder="Search Items"
          style={styles.searchItems}
        ></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 357,
    height: 34
  },
  rectangle$113: {
    backgroundColor: '#D3D3D3',
    display: 'flex',
    flexDirection: 'column',
    width: 357,
    height: 34,
    borderRadius: 40
  },
  searchItems: {
    height: 28,
    fontSize: 15,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 10,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    color: '#000000'
  }
})

export default SearchBar
