import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import RegisterOne from '../screens/RegisterOne'

const SmallLogin = ({ navigation }) => {
  const onPress = () => {
    console.log('Button Pressed')
  }
  return (
    // <View style={styles.root}>
    //   <View style={styles.rectangle$56}>
    //     <Text style={styles.login}>{`Login`}</Text>
    //   </View>
    // </View>
    <View style={styles.root}>
      <Button
        buttonStyle={styles.rectangle$56}
        title="Login"
        onPress={() => navigation.navigate('RegisterOne')}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 137,
    height: 41
  },
  rectangle$56: {
    display: 'flex',
    width: 137,
    height: 41,
    backgroundColor: '#EAAE54',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  login: {
    height: 36,
    fontSize: 27,
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#ffffff'
  }
})

export default SmallLogin
