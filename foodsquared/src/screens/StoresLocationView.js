/// Plot points on the Map later
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { useGetLocation } from '../hooks/useGetLocation'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// Make a component that returns google maps
const StoresLocationView = () => {
  const [lat, lon, isLoading, errorMsg] = useGetLocation()
  const [region, setRegion] = useState({
    region: {
      latitude: 40.49219181907895,
      longitude: -74.44282926028512,
      latitudeDelta: 0.00422,
      longitudeDelta: 0.00521
    }
  })
  const [selectedData, setSelectedData] = useState({})
  const [selectedDetails, setSelectedDetails] = useState({})
  const [marker, setMarker] = useState({
    userlocation: {
      latlng: { latitude: 40.49219181907895, longitude: -74.44282926028512 },
      title: 'Store One',
      key: 4,
      description: 'This is store one'
    },
    storeone: {
      latlng: { latitude: 40.49142667989737, longitude: -74.44229447377683 },
      title: 'Store One',
      key: 1,
      description: 'This is store one'
    },
    storetwo: {
      latlng: { latitude: 40.489745840305886, longitude: -74.44139325154781 },
      title: 'Store Two',
      key: 2,
      description: 'This is store two'
    },
    storethree: {
      latlng: { latitude: 40.4889788412612, longitude: -74.43953716290945 },
      title: 'Store Three',
      key: 3,
      description: 'This is store Three'
    },
    searchlocation: {
      latlng: { latitude: 40.49142667989737, longitude: -74.44229447377683 },
      title: 'Selected Location',
      key: 5,
      description: 'This is the place that will be searched for'
    }
  })
  const sendData = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.13:3000/api/distanceFilter',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            long: lat,
            lat: lon
          })
        }
      )
      let json = await response.json()
      console.log(json)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    sendData()
  }, [lat, lon])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarcontainer}>
        <View style={[styles.searchbar, styles.shadowProp]}>
          <GooglePlacesAutocomplete
            placeholder="Search for Nearest Stores"
            fetchDetails={true}
            autofocus={true}
            query={{
              key: 'AIzaSyCITMIzfxs7urBBZ9kMlUAXzLw7YCpK-Yk',
              language: 'en'
            }}
            onPress={(data, details = null) => {
              setSelectedData(data)
              setSelectedDetails(details)
              console.log(` Selected Latitude is: ${selectedDetails}`)
              console.log(` Selected Longitude is: ${selectedDetails}`)
              setMarker({
                searchlocation: {
                  latlng: {
                    latitude: selectedDetails.geometry.location.lat,
                    longitude: selectedDetails.geometry.location.lng
                  },
                  title: selectedDetails.name,
                  key: 5,
                  description: selectedData.description
                }
              })
              console.log(marker)
            }}
          />
        </View>
      </View>
      <View style={styles.mapcontainer}>
        <MapView
          showsUserLocation={true}
          style={styles.map}
          initialRegion={region.region}
          region={region.region}
        >
          <Marker
            key={marker.searchlocation.key}
            coordinate={marker.searchlocation.latlng}
            title={marker.searchlocation.title}
            description={marker.searchlocation.description}
          ></Marker>
        </MapView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapcontainer: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    flexposition: 'absolute',
    alignItems: 'center',
    zIndex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  },
  searchbarcontainer: {
    justifyContent: 'space-evenly',
    position: 'absolute',
    height: '50%',
    width: '100%',
    top: 45,
    left: 45,
    alignItems: 'stretch',
    zIndex: 5
  },
  searchbar: {
    height: '100%',
    width: '75%',
    alighItems: 'center',
    justifyContent: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
})

export default StoresLocationView
