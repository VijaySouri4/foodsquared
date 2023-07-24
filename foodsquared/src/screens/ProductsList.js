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

global.cart = []

const DATA = [
  {
    id: '1',
    name: 'Cheetos',
    sellbyDate: 'August 21st',
    price: 2.2,
    image:
      'https://www.syracuse.com/resizer/ScBnLXa5CZKGWOxFaGc-KzxbGXs=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/movies_impact/photo/cheetosjpg-17f6656eaa47f24f.jpg'
  },
  {
    id: '2',
    name: 'Bananas',
    sellbyDate: 'July 30',
    price: 0.7,
    image:
      'https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-Download-PNG.png'
  },
  {
    id: '3',
    name: 'Broccoli',
    sellbyDate: 'July 31',
    price: 1.1,
    image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c1ff.png'
  }
]

const RESDATA = [
  {
    __v: 0,
    _id: '649cded4ba10fc5593380cd4',
    category: 'fruit',
    name: 'banana',
    price: 10,
    sellbyDate: '2023-07-23T00:00:00.000Z',
    storeId: 2
  },
  {
    __v: 0,
    _id: '649cdee3ba10fc5593380cd6',
    category: 'fruit',
    name: 'apple',
    price: 122,
    sellbyDate: '2023-12-23T00:00:00.000Z',
    storeId: 2
  }
]

const ProductsList = ({ route, navigation }) => {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const { storeID, storeLogo } = route.params
  const [search, setSearch] = useState('')
  const [dropdownselection, setDropdownselection] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Sell By Date', value: 'SBD' },
    { label: 'Price', value: 'Price' },
    { label: 'Category', value: 'Category' }
  ])
  const [res, setRes] = useState([])

  const sendData = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.13:3000/api/storeProduct/${storeID}`,
        {
          method: 'GET'
        }
      )
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

  const Item = ({ item, count }) => (
    <View style={styles.productcardcontainer}>
      <View style={styles.cartbutton}></View>
      <Pressable
        onPress={() =>
          navigation.navigate('Product', {
            id: item.id,
            storeLogo: 'foodsquared/assets/storelogo.png',
            ProductName: item.name,
            ProductImage: item.image, //replace image here if using API
            ProductPrice: item.price,
            ProductSellByDate: item.sellbyDate.slice(0, 10)
          })
        }
        style={{ marginTop: 20 }}
      >
        <ProductCard
          name={item.name}
          sellbyDate={item.sellbyDate.slice(0, 10)}
          price={item.price}
          image={item.image} // replace image here if using API
        />
      </Pressable>
    </View>
  )
  useEffect(() => {
    console.log(`Selected ${value}`)
    if (value === 'Category') {
      navigation.navigate('ProductCategories', {
        storeID: 121,
        storeLogo: 'foodsquared/assets/storelogo.png'
      })
    }
  }, [value])
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
            dropDownDirection="TOP"
            style={{ height: '10%', width: '50%' }}
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          console.log(item)
          return <Item item={item} count={count} />
        }}
        numColumns={2}
        style={styles.flatlist}
      />
    </SafeAreaView>
  )
}

export default ProductsList

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  dropdown: {
    zIndex: 5,
    marginTop: 20,
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'black'
  },
  logo: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  productcardcontainer: {},
  increasebutton: {
    marginLeft: 30,
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  decreasebutton: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  cartbutton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  storeheader: {
    backgroundColor: '#EBFFED',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  flatlist: {
    zIndex: 1,
    flex: 0.7
  },
  SearchBar: {
    backgroundColor: 'white',
    height: 34,
    width: 357,
    borderRadius: 10
  }
})
