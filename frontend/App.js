import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
const FlatListBasics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //axios conecta el front con el backend
    axios
      .get("http://10.0.2.2:8080/account/users", {})
      .then((response) => {
        console.log(response.data);
        //arreglo para tomar el nombre
        let dataTemp = [];
        response.data.forEach((element) => {
          dataTemp.push({ key: element.nombre });
        });
        setData(dataTemp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
