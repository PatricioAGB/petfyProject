/* eslint-disable */
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Drawer from "../components/navigation";
import Publication from "../components/Publication";

const publicationsMock = [
  {
    publicationId: 1, //id de la publicacion
    madeBy: {
      userId: 1,
      name: "Patricio",
      lastName: "González",
      email: "Razer81368@gmail.com",
      phone: "+569 99557957",
    }, //  id del usuario q encontro la macosta
    description: "AYUDAAAA POR FAVOR", //descripcion de la publicación
    pet: {
      lastSeenDate: "2022-10-25", //ultima fecha vista de la mascota
      lastUbication: "Quilpue,buenos aires, cerca del hospital", // ultima ubicacion
      breed: "Pug", // raza de la mascota
      name: "Pugsito", //nombre mascota
      color: "cafe", //color mascota,
      size: "Pequeño",
      chip: "991001003414418",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/My_pug.jpg/800px-My_pug.jpg",
    },
  },
  {
    publicationId: 2,
    madeBy: {
      userId: 2,
      name: "Natassia",
      email: "nphilippault0@youku.com",
      phone: "699-982-0637",
    },
    name: {
      lastName: "Philippaults",
    },
    description: "",
    pet: {
      lastSeenDate: "10/16/2022",
      lastUbication: "Banjar Pekandelan",
      breed: "Safari",
      name: "Badger, american",
      size: "XL",
      color: "Aquamarine",
      chip: "4065326095",
      image:
        "https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg",
    },
  },
  {
    publicationId: 3,
    madeBy: {
      userId: 3,
      name: "Annadiana",
      email: "akunath1@adobe.com",
      phone: "360-845-6294",
    },
    name: {
      lastName: "Kunathss",
    },
    description: "aaaaaaaaaaaaaaaaaaaaaaaaa2a1",
    pet: {
      lastSeenDate: "12/26/2022",
      lastUbication: "Nuwara Eliyaa",
      breed: "Cirrus",
      name: "Madagascar fruit bataa",
      size: "2XL",
      color: "Goldenroda",
      chip: "9176190412",
      image:
        "https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/3FFA8546-05CE-4608-9B69-6602D02A4C58/cachorro-pomsky_98.jpg?crop=1183,666,x0,y103&width=1900&height=1069&optimize=high&format=webply",
    },
  },
  {
    publicationId: 5,
    madeBy: {
      userId: 5,
      name: "Marius",
      email: "mmidden3@cafepress.com",
      phone: "332-117-4936",
    },
    name: {
      lastName: "Midden",
    },
    description: "",
    pet: {
      lastSeenDate: "6/11/2022",
      lastUbication: "Osieczany",
      breed: "4000s",
      name: "Ground legaan",
      size: "L",
      color: "Indigo",
      chip: "0058393366",
      image:
        "https://www.eluniverso.com/resizer/eyyHgZdgA3ZjgdM0V-7VsuiC8Dc=/1006x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/3JOT23QQA5FXBOEPI2B4CUJIVE.jpg",
    },
  },
  {
    publicationId: 6,
    madeBy: {
      userId: 6,
      name: "Michelina",
      email: "mfounds4@youtu.be",
      phone: "675-874-2566",
    },
    name: {
      lastName: "Founds",
    },
    description: "",
    pet: {
      lastSeenDate: "1/12/2022",
      lastUbication: "Saribudolok",
      breed: "Suburban",
      name: "ssssssss",
      size: "XS",
      color: "Violet",
      chip: "24722725882",
      image:
        "https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/10_1615903151158.jpeg",
    },
  },
];

const Home = (navigation) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.container}>
          <View style={styles.icon}>
            {/* Icono de menu*/}
            <TouchableOpacity
              onPress={() => navigation.navigation.openDrawer()}
            >
              <Ionicons name="ios-menu" size={30} />
            </TouchableOpacity>
          </View>
          {/* nombre de usuario */}
          <View style={styles.square}>
            <Text style={{ fontSize: 18, textAlign: "center" }}>
              Hola Usuario
            </Text>
          </View>
          {/* profile image */}
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => navigation.navigation.openDrawer()}
            >
              <ImageBackground
                source={require("../assest/images/perfil.jpg")}
                style={{ width: 55, height: 55, marginLeft: 50 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={publicationsMock}
          renderItem={Publication}
          keyExtractor={(item) => item.publicationId}
        />


      </ScrollView>
    </SafeAreaView>
  );
};
const devicewidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
    flex: 1,
    backgroundColor: "linen",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 7,
  },
  icon: {
    width: 100,
    height: 60,
    alignContent: "center",
  },
  profile: {
    width: 100,
    height: 60,
  },
  
});
export default Home;
