import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Pressable
} from 'react-native'
import React from 'react'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownPicker from 'react-native-dropdown-picker'
import { Divider } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'

const CustomerAccount = ({ navigation }) => {
  const [resp, setResp] = React.useState()

  const sendData = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.13:3000/api/customerProfile`,
        {
          method: 'GET'
        }
      )
      let json = await response.json()
      console.log(json)
      setResp(json[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    sendData()
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Account Information</Text>
        <Pressable>
          <Feather name={'edit'} size={25} color={'black'} />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Name: {resp?.name}</Text>
        <Text style={{ fontSize: 20 }}>Email: {resp?.email}</Text>
        <Text style={{ fontSize: 20 }}>Address: {resp?.adress}</Text>
        <Text style={{ fontSize: 20 }}>Phone: {resp?.phone}</Text>
      </View>

      <View>
        <Divider bold={true} style={{ marginTop: 20 }} />
      </View>

      {/* <View style={styles.actions}> */}
      <View style={styles.button1}>
        <Pressable>
          <Text>Reset Password</Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable
          onPress={() => {
            navigation.navigate('Login First')
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default CustomerAccount

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  title: {
    flexDirection: 'row',
    marginLeft: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  button1: {
    padding: 10,
    width: '35%',
    height: '5%',
    backgroundColor: 'orange',
    borderRadius: 20
  },
  button2: {
    padding: 10,
    width: '35%',
    height: '5%',
    backgroundColor: 'tomato',
    borderRadius: 20
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    jsutifyContent: 'space-evenly'
  }
})
