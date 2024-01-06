import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen({navigation}: any) {
  return (
    <ImageBackground
    source={{uri:"https://c4.wallpaperflare.com/wallpaper/900/604/6/assassin-s-creed-animus-wallpaper-preview.jpg"}}
    style={styles.container}
    >
        <View style={styles.gap}/>
        
      
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Tabs')}>
            <Text style={styles.textbutton}>Ingresar</Text>
      </TouchableOpacity>
    </ImageBackground>
   
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'cover',
        alignItems:'center'
    },
    gap:{
        marginTop:500,
    },
    btn:{
        width:150,
        height:35,
       alignItems:'center',
       verticalAlign:'center',
      
       backgroundColor:'#56A0D3',
       paddingTop:5,
       
  
       borderRadius:5
    },
    textbutton:{
        fontSize:15,
        color:'white',
        fontWeight:'bold'

    }

})