import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export const useGetLocation = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [lat, setLat] = useState(40.49219181907895)
  const [lon, setLon] = useState(-74.44282926028512)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      // console.log(`Inside useGETLOCATION hook The latitude is : ${lat}`)
      // console.log(`Inside useGETLOCATION hook The longitude is : ${lon}`)
    })()
  }, [lat, lon])

  return [lat, lon, isLoading, errorMsg]
}
