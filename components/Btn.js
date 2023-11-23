import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    btn: {
       marginTop:50,
       width:'100%',
       backgroundColor:  '#1A759F',
       padding:20,
       borderRadius:16,
       marginBottom: 100, 
    },
    text:{
      fontSize:24,
      fontWeight:'600',
      color: 'white',
      textAlign: 'center',
    }

})

export default function Button(props){
    return <TouchableOpacity onPress={props.onClick}  style={{...styles.btn, ...props.style}}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
}