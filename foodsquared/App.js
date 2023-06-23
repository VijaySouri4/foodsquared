import React from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  SafeAreaViewBase
} from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <Text>Food Squared</Text>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'green'
  }
})

export default App
