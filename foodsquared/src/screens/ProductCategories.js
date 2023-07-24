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
import CategoryCard from '../components/CategoryCard'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState, useEffect } from 'react'

const ProductCategories = ({ route, navigation }) => {
  const { storeID, storeLogo } = route.params
  const [choice, setChoice] = useState('')
  const [search, setSearch] = useState('')
  const [dropdownselection, setDropdownselection] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Sell By Date', value: 'SBD' },
    { label: 'Price', value: 'Price' },
    { label: 'Category', value: 'Category' }
  ])
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.storeheader}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072010/LOGO_WALMART_MEXICO.png?itok=t7fCl1ri'
          }}
        />
        <Text>Store ID: {storeID}</Text>
        {/* THESE DO NOT MAKE SENSE FOR THIS SCREEN, REMOVE ONCE CONFIRMED */}
        <TextInput
          style={styles.SearchBar}
          placeholder="Search Items"
          value={search}
          onChangeText={setSearch}
        ></TextInput>
        <View style={styles.dropdown}>
          <Text style={{ fontWeight: 'bold' }}>Sort By:</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ height: '10%', width: '50%' }}
            containerStyle={{
              top: -35,
              left: 10
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={() =>
            navigation.navigate('ProductsList', {
              storeID: 121,
              storeLogo: 'foodsquared/assets/storelogo.png'
            })
          }
          style={{ marginTop: 20 }}
        >
          <CategoryCard
            name={'fruits'}
            image={
              'https://www.freepnglogos.com/uploads/fruits-png/fruits-solid-fruit-color-testing-mecomb-hunterlab-malaysia-18.png'
            }
          />
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate('ProductsList', {
              storeID: 121,
              storeLogo: 'foodsquared/assets/storelogo.png'
            })
          }
          style={{ marginTop: 20 }}
        >
          <CategoryCard
            name={'Vegetables'}
            image={
              'https://static.vecteezy.com/system/resources/previews/013/442/143/original/fresh-vegetables-on-a-transparent-background-free-png.png'
            }
          />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ProductCategories

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  dropdown: {
    marginTop: 50,
    marginLeft: 50,
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  cartbutton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  storeheader: {
    backgroundColor: '#519671',
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  SearchBar: {
    backgroundColor: 'white',
    height: 34,
    width: 357,
    borderRadius: 10
  }
})
