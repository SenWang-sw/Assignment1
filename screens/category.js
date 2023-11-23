import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/title';

const Category = ({navigation}) => {
  //const [choose,setChoose] = useState(0);
    return (
      <View style={styles.container}>
        <Title titleText='Category' />
        <TouchableOpacity onPress={()=>navigation.navigate("History")} style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Art")} style={styles.button}>
            <Text style={styles.buttonText}>Art</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Animal")} style={styles.button}>
            <Text style={styles.buttonText}>Animals</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Vehicle")} style={styles.button}>
            <Text style={styles.buttonText}>Vehicles</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default Category;

  const styles = StyleSheet.create({

   
    container:{
      paddingTop: 60,
      paddingHorizontal: 100,
      height:"100%",
      marginTop: 30
    },
    button:{
       width:'100%',
       backgroundColor:  '#1A759F',
       padding:20,
       borderRadius:16,
       marginBottom: 100, 
       
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color: 'white',
      textAlign: 'center',
    },
    
});