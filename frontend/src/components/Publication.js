/* eslint-disable */
import {View, Text, Image, Dimensions,StyleSheet} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Publication = ({item}) => {

  return (
    <View style={styles.publicationContainer}>
    <Image style={styles.imageStyle} source={{uri:item.pet.image}}/>
    <View style={styles.infoStyle}> 
    <Text style={styles.tittleStyle}>{item.pet.breed}</Text>
    <Text style={styles.descriptionStyle}>{item.description}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.name}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.color}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.size}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.chip}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.lastUbication}</Text>
    <Text style={styles.descriptionStyle}>{item.pet.lastSeenDate}</Text>

    </View>
  </View>
  ); 
};
const devicewidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({ 
  publicationContainer:{
    width: devicewidth -25,
    backgroundColor:"linen",
    height:400,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    
    elevation:10,
    shadowRadius:10,   
  },
  imageStyle:{
    height:200,
    width:devicewidth -25,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    opacity:0.9,
  },
  tittleStyle: {
    fontSize:20,
    
  },
  descriptionStyle:{
    fontWeight:'400',
  },
  infoStyle:{
    marginHorizontal: 30,
    marginVertical:10,
  }
});

export default Publication;
