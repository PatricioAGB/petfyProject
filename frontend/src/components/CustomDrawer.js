import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground source={require('../assest/images/fondo.jpg')} style={{padding: 10}}>
          <Image source={require('../assest/images/perfil.jpg')} style={{height: 80, width: 80, BorderRadius: 40, marginBottom: 10}}/>
          <Text style={{color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium'}}> nombre</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name='share-social-outline' size={22} />
            <Text style={{fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5}}> Compartelo con un amigo </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name='exit-outline' size={22} />
            <Text style={{fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5}}> Cerrar Sesión </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
