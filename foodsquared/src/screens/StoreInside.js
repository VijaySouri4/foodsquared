import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native'
import SearchBar from '../components/SearchBar'

const StoreInside = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData()
    console.log(`users are : ${users}`)
  }, [])

  const fetchData = () => {
    fetch('http://172.31.130.16:3000/api/viewProduct')
      .then((response) => response.json())
      .then((jsonResponse) => setUsers(jsonResponse))
      .catch((error) => console.log(error))
  }
  const renderUser = ({ item }) => {
    return (
      <View style={{ margin: 10, borderWidth: 0.5, padding: 10 }}>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
          {item.name}
        </Text>
        <Text style={{ color: 'black' }}>Name : {item.name.toString().ca}</Text>
        <Text style={{ color: 'black' }}>sellbyDate : {item.sellbyDate}</Text>
        <Text style={{ color: 'black' }}>Price : {item.price}</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#EBFFED'
  },
  imageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    margin: 30,
    width: 40,
    height: 40
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 10
  },
  textContainer: {
    margin: 40
  }
})
export default StoreInside
