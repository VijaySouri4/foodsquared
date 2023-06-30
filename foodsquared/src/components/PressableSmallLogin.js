import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const PressableSmallButton = (props) => {
  const { title = 'None', navigation, navigatingpage } = props
  const page = navigatingpage[0]
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate(page)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 137,
    height: 41,
    backgroundColor: '#EAAE54',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff'
  }
})

export default PressableSmallButton
