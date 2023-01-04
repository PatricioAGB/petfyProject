/* eslint-disable */
import React from 'react';
import {Button, Text, TextInput, Touchable, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

// crea el formulario de inicio de sesion
const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  // ejecuta la función al hacer click en el boton
  const handleClick = () => {
    // axios conecta el front con el backend
    axios
        .post('http://10.0.2.2:8080/account/login', {email: email, contrasena: contrasena}).then((data)=> {
          console.log(data);
        }, navigation.navigate('Inicio') )
        .catch((error)=> {
          console.log(error);
        });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} value={email} placeholder="Ingresa Email" onChangeText={(text)=> setEmail(text)}/>
        <TextInput style={styles.input} value={contrasena} placeholder="Ingresa Contraseña" secureTextEntry onChangeText={(text)=> setContrasena(text)}/>

        <Button title="Iniciar sesión" onPress={handleClick } > </Button>

        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 50}}>
          <Text> No tienes cuenta ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.link}>  Registrarse</Text>
          </TouchableOpacity>
        </View>
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
export default Login;
