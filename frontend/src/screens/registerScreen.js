import React from "react";
import { Button, Text, TextInput, Touchable, TouchableOpacity, View,StyleSheet} from "react-native";
import { useState } from "react";
// crea el formulario de inicio de sesion
const Registro = ({navigation}) => {
    const [usuario,setUsuario] = useState(null);
    const [Contrasena,setContrasena] = useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} value={usuario} placeholder="Ingresa usuario" onChangeText={(text)=> setUsuario(text)}/>
                <TextInput style={styles.input} value={Contrasena} placeholder="Ingresa Contraseña" secureTextEntry onChangeText={(text)=> setContrasena(text)}/>
               
               <Button title="Registrarse"></Button>

            </View>
        </View>
    )
}
// alinea el inicio de sesion en el centro
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //aumenta el ancho del formulario
    wrapper:{
        width: '80%',
        
    },
    // da el formato de los inputs
    input: {
        marginBottom: 12,
        borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14,
    },
    link: {
        color:'blue',

    }
    }
)

export default Registro;