import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database';
import { db } from '../config/Config';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function RegistroAlmacenadoScreen() {
    const [gastos, setgastos] = useState([])
    const [id, setid] = useState('')
    const [gastobusq, setgastobusq] = useState<any>("")
    //LEER
  useEffect(() => {
    function leer() {
      const starCountRef = ref(db, "gastos/");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        // adaptacion del arreglo para que la clave este dentro del objeto
        const dataTemp: any = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));

        setgastos(dataTemp);
      });
    }
    leer();
   
  }, []);
  type gasto = {
    id: number;
    ammount: number;
    category: string;
    description: string;
  };
  //BUSCAR 
  function buscar(){
    const gastoEncontrado = gastos.find((objeto:gasto) => String(objeto.id) === id);
    if(gastoEncontrado){
        setgastobusq(gastoEncontrado)
    }
    else{
        setgastobusq('')
    }

  }
  function touch(item:gasto){
        Alert.alert("Info", "Categoria: "+item.category+", Descripcion: "+item.description)
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.titulo}>Registros Almacenados</Text>
      <View style={styles.busq}>
        <TextInput
            placeholder='Ingrese Id'
            onChangeText={(texto)=>setid(texto)}
            style={styles.input}
            keyboardType='numeric'

        />
        <Button title='Leer' onPress={()=>buscar()}></Button>
      </View>
        
      <View style={styles.montocat}>
      <Text style={{marginRight:20}}>Monto: {gastobusq.ammount}</Text>
        <Text>Categoria: {gastobusq.category}</Text>
      </View>
        <View>
            <Text>Description: {gastobusq.description}</Text>
        </View>

        <View style={{borderWidth:1,width:'100%',marginTop:20}}/>
        <View style={styles.flat1}>
        <Text style={styles.titulo}>Registros Almacenados</Text>
            <FlatList
              data={gastos}
              renderItem={({item}:{item:gasto})=>(
                <TouchableOpacity style={styles.touch} onPress={()=>(touch(item))} >
                    <Text>Monto: {item.ammount}</Text>
                </TouchableOpacity>
              )}
            />

        </View>

      

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    titulo:{
        marginVertical:25,
        fontSize:20,
        fontWeight:'bold',
        color:'#C41E3A'
    },
    busq: {
        
        height: 40,
        marginVertical:20,
        flexDirection: "row",
        justifyContent:"center",

        
        
      },
    input: {
        height: 40,
        width: 250,
        borderColor: '#007FFF',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius:5,
        marginRight:10
        
      },
      montocat:{
        height: 30,
        marginBottom:10,
        flexDirection: "row",
        justifyContent:"center",
      },
      flat1:{
            height:'50%'
      },
      touch:{
        backgroundColor: '#C5CBE1',
        padding: 10,
        margin: 10,
        borderRadius: 5,
      }
     


})