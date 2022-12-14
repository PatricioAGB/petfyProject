import React from "react";
import { Text, View} from "react-native";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreen"
import Login from "../screens/loginScreen"
import Register from "../screens/registerScreen"

const Stack = createNativeStackNavigator();

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio de sesión" component={Login} options={{headerShown: false}}/> 
                <Stack.Screen name="Registro" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="HOME" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default navigation;