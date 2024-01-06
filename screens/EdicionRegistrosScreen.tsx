import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ref, remove, update } from "firebase/database";
import { db } from "../config/Config";
import { TextInput } from "react-native-gesture-handler";

export default function EdicionRegistrosScreen() {
  const [id, setid] = useState("");
  const [monto, setmonto] = useState("");
  const [categoria, setcategoria] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [id2, setid2] = useState("");

  //ACTUALIZAR - EDITAR
  function actualizar(
    id: number,
    monto: number,
    categoria: string,
    descripcion: string
  ) {
    update(ref(db, "gastos/" + id), {
      ammount: monto,
      category: categoria,
      description: descripcion,
    });
    Alert.alert("Mensaje","El registro se ha actualizado")
  }

  //ELIMINAR
  function eliminar(id: number) {
    remove(ref(db, "gastos/" + id));
    Alert.alert("Mensaje","El registro se ha eliminado")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar</Text>
      <TextInput
        placeholder="Ingrese id"
        onChangeText={(texto) => setid(texto)}
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.montcat}>
        <TextInput
          placeholder="Ingrese monto"
          onChangeText={(texto) => setmonto(texto)}
          style={styles.input2}
          keyboardType='numeric'
        />
        <TextInput
          placeholder="Ingrese categoria"
          onChangeText={(texto) => setcategoria(texto)}
          style={styles.input2}
        />
      </View>

      <TextInput
        placeholder="Ingrese descripcion"
        onChangeText={(texto) => setdescripcion(texto)}
        style={styles.input}
      />

      <Button
        color={"green"}
        title="Actualizar"
        onPress={() =>
          actualizar(Number(id), Number(monto), categoria, descripcion)
        }
      />
      <View style={{ borderWidth: 1, width: "100%", marginTop: 20 }} />
      <Text style={styles.titulo}>Eliminar</Text>
      <View style={styles.eliminar}>
        <TextInput
          placeholder="Ingrese id"
          onChangeText={(texto) => setid2(texto)}
          style={styles.input3}
          keyboardType="numeric"
        />
        <Button
        color={"red"}
        title="Eliminar"
        onPress={() =>
          eliminar(Number(id2))
        }
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    marginVertical: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "#C41E3A",
    textAlign: "center",
  },

  input: {
    height: 40,
    width: 200,
    borderColor: "#007FFF",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input2: {
    height: 40,
    width: 130,
    borderColor: "#007FFF",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  montcat: {
    height: 40,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  eliminar:{
    height: 40,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  input3: {
    height: 40,
    width: 200,
    borderColor: "#007FFF",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight:10,
  },
});
