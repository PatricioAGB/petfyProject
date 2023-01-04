/* eslint-disable */
import React from 'react';
import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list';
import {Button, Text, TextInput, Touchable, TouchableOpacity, View, StyleSheet, select} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
// crea el formulario de inicio de sesion
const Registro = ({navigation}) => {
  const [usuario, setUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [region, setRegion] = useState([]);
  // no sirve
  const App = () => {
    const [selected, setSelected] = React.useState('');
    const [data, setData] = React.useState([]);

    React.useEffect(() =>
    // Get Values from database
      axios.get('http://10.0.2.2:8080/region/regiones')
          .then((response) => {
            // Store Values in Temporary Array
            const newArray = response.data.map((item) => {
              return {key: item.idRegion, value: item.nombre};
            });
            // Set Data Variable
            setData(newArray);
          })
          .catch((e) => {
            console.log(e);
          })
    , []);

    return (
      <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} value={usuario} placeholder="Ingresa usuario" onChangeText={(text)=> setUsuario(text)}/>
        <TextInput style={styles.input} value={contrasena} placeholder="Ingresa Contraseña" secureTextEntry onChangeText={(text)=> setContrasena(text)}/>
        <Button title="Registrarse"></Button>
      </View>
    </View>
  );
};
// alinea el inicio de sesion en el centro
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // aumenta el ancho del formulario
  wrapper: {
    width: '80%',

  },
  // da el formato de los inputs
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',

  },
},
);

export default Registro;
