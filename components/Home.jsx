import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Carousel from './Carousel';

const Home = () => {
  return (
    <View style={{marginTop:50}}>
      <View style={styles.container}>
        <TextInput placeholder='search for resturant items or more' style={{fontSize:17}}/>
        <AntDesign name="search1" size={24} color="black" /> 
      </View>
      hello
      


      <Carousel/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItem:"center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding:10,
        borderColor: "#060606",
        borderRadius: 7
    }
})