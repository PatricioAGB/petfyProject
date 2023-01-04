/* eslint-disable */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/homeScreen';
import searchScreen from '../screens/searchScreen';
import Login from '../screens/loginScreen';
import Register from '../screens/registerScreen';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


const navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) =>
      <CustomDrawer {...props }/>} screenOptions={{headerShown: false, drawerActiveBackgroundColor: '#aa18ea', drawerActiveTintColor: '#fff', drawerInactiveTintColor: '#333', drawerLabelStyle: {marginLeft: 5 , fontSize: 15}}}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: (color) => (
            <Ionicons name="home-outline" size={22} color={color}/>
          ),
        }} />
        <Drawer.Screen name="Search" component={searchScreen} options={{
          drawerIcon: (color) => (
            <Ionicons name="search-outline" size={22} color={color}/>
          ),
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// <Stack.Screen name="Registro" component={Register}  options={{headerShown: false}}/>
// <Stack.Screen  name="Inicio"  component={Header} options={{headerShown: false}}/>

export default navigation;
