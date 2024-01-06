import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set } from 'firebase/database'
import { db } from '../config/Config'

export default function RegistroGastosScreen() {
    const [id, setid] = useState('')
    const [monto, setmonto] = useState('')
    const [categoria, setcategoria] = useState('')
    const [descripcion, setdescripcion] = useState('')
    //GUARDAR
function guardar(id:number, monto:number, categoria:string, descripcion:string) {
  
    if(id==0 || monto==0 || categoria.trim()==="" || descripcion.trim()===""){  
        Alert.alert("Error", "No se permiten campos en blanco")
      }
      else{
        set(ref(db, 'gastos/' + id), {
            ammount: monto,
            category: categoria,
            description: descripcion
          });
          Alert.alert('Mensaje','Datos guardados')
      }
      
      //LIMPIAR LOS CAMPOS
      setid("");
      setmonto("");
      setcategoria("");
      setdescripcion("");
   
    
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Registro de Gastos</Text>
      <TextInput
        placeholder='Ingrese el id'
        onChangeText={(texto)=>setid(texto)}
        style={styles.input}
        keyboardType='numeric'
        value={id}
      />
       <TextInput
        placeholder='Ingrese el monto'
        onChangeText={(texto)=>setmonto(texto)}
        style={styles.input}
        keyboardType='numeric'
        value={monto}
      />
       <TextInput
        placeholder='Ingrese la categoria'
        onChangeText={(texto)=>setcategoria(texto)}
        style={styles.input}
        value={categoria}
      />
       <TextInput
        placeholder='Ingrese la descripcion'
        onChangeText={(texto)=>setdescripcion(texto)}
        style={styles.input}
        value={descripcion}
      />
      <Button title='Guardar' onPress={()=>(guardar(Number(id),Number(monto),categoria,descripcion))} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        
        
    },
    titulo:{
        marginVertical:25,
        fontSize:20,
        fontWeight:'bold',
        color:'#C41E3A'
    },
      input: {
        height: 40,
        width: 300,
        borderColor: '#007FFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius:5,
        
      },
})