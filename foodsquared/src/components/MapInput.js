import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const MapInput = () => {
  const [selectedData, setSelectedData] = useState({})
  const [selectedDetails, setSelectedDetails] = useState({})
  console.log(' Inside MapInput')
  useEffect(() => {
    console.log('Logging Data from MapInput')
    console.log(selectedData)
  })
  return (
    <View style={styles.searchbar}>
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
          console.log(
            ` Selected Latitude is: ${selectedDetails.geometry.location.lat}`
          )
          console.log(
            ` Selected Longitude is: ${selectedDetails.geometry.location.lng}`
          )
        }}
      />
    </View>
  )
}

export default MapInput

const styles = StyleSheet.create({
  searchbar: {
    height: '100%',
    width: '75%',
    alighItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
})
