import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from 'react-native'
import React, { useEffect } from 'react'
import StoreCard from '../components/StoreCard'
import MapInput from '../components/MapInput'
import { useGetLocation } from '../hooks/useGetLocation'
import { Feather } from '@expo/vector-icons'

const RESDATA = [
  {
    __v: 0,
    _id: '64a4671144575bdc49936a1b',
    address: 'Near hawamahal, Jaipur, Rajasthan ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'Ale and witch',
    storeId: 2
  },
  {
    __v: 0,
    _id: '64a4690ee5daa163dc139149',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'dining hall',
    storeId: 3
  },
  {
    __v: 0,
    _id: '64a46fc41236663a39b42720',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'werblin',
    storeId: 4
  },
  {
    __v: 0,
    _id: '64a46fc41236663a39b42720',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'werblin',
    storeId: 4
  },
  {
    __v: 0,
    _id: '64a4690ee5daa163dc139149',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'dining hall',
    storeId: 3
  },
  {
    __v: 0,
    _id: '64a4671144575bdc49936a1b',
    address: 'Near hawamahal, Jaipur, Rajasthan ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'Ale and witch',
    storeId: 2
  },
  {
    __v: 0,
    _id: '64a46fc41236663a39b42720',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'werblin',
    storeId: 4
  },
  {
    __v: 0,
    _id: '64a46fc41236663a39b42720',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'werblin',
    storeId: 4
  },
  {
    __v: 0,
    _id: '64a46fc41236663a39b42720',
    address: ' busch campus ',
    location: { coordinates: [Array], type: 'Point' },
    name: 'werblin',
    storeId: 4
  }
]

const StoreList = ({ navigation }) => {
  const [lat, lon, isLoading, errorMsg] = useGetLocation()
  const [res, setRes] = React.useState([])

  const sendData = async () => {
    try {
      const response = await fetch('http://192.168.1.13:3000/api/viewStore', {
        method: 'GET'
      })
      let json = await response.json()
      console.log(json)
      setRes(json)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    sendData()
  }, [])
  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        // What do you want the down arrow to do here?
      >
        <Feather name={'map-pin'} size={25} color={'green'} />
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'green'
          }}
        >{`New Brunswick, New Jersey`}</Text>
      </View>
      <View style={[styles.searchbarcontainer, styles.shadowProp]}>
        <MapInput />
      </View>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1
          }}
        >
          {RESDATA.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ProductsList', {
                  storeID: item._id,
                  storeLogo: 'foodsquared/assets/storelogo.png'
                })
              }
              style={{ marginTop: 20 }}
            >
              {/* // Okay here manage a state variable that will be updated with the
          store id and then pass it to the StoreInside screen. Using this Id,
          fetch the products from the database. */}
              <StoreCard
                storeName={item.name}
                itemCount={33}
                storeImage={
                  'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072010/LOGO_WALMART_MEXICO.png?itok=t7fCl1ri'
                }
                distance={item.storeId} //This is temporary and is ment to actually show distance, not storeID
                status={'open'}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StoreList

const styles = StyleSheet.create({
  searchbarcontainer: {
    justifyContent: 'space-evenly',
    position: 'absolute',
    height: '35%',
    width: '100%',
    top: 80,
    left: 50,
    alignItems: 'stretch',
    zIndex: 5
  },
  scrollView: {
    marginTop: 60,
    // backgroundColor: '#519671'
    backgroundColor: '#EBFFED'
    // backgroundColor: '#ffffff'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
})
