import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth,DataStore } from "aws-amplify";
import { User } from "../../models";
import { useAuthContext } from "../../Contexts/AuthContext";
import '@azure/core-asynciterator-polyfill'; 
import { useNavigation } from "@react-navigation/native";


const Profile = () => { 
  const {dbUser} = useAuthContext();
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat+"" || "");
  const [lng, setLng] = useState(dbUser?.lng+"" || "");
  const navigation = useNavigation();

  const {sub,setDbUser} = useAuthContext();


  const onSave = async () => {

    try{
     const user = await DataStore.save(
        new User({
          "name":name,
          "address":address,
          "lat":parseFloat(lat),
          "lng":parseFloat(lng),
          "sub":sub,
      })
    );
    setDbUser(user);
    console.log("user",user);
    } catch(e){ 
      Alert.alert("Error",e.message)
    }

    // if(dbUser){
    //   await updateUser();
    // }else{
    //   await createUser();
    // }

    // navigation.goBack();
    
  };
  

  const updateUser = async () =>{
    const user = await DataStore.save(
      User.copyOf(dbUser,(updated) => {
        updated.name = name;
        updated.address = address;
        updated.lat = parseFloat(lat);
        updated.lng = parseFloat(lng);

      })
    )
    setDbUser(user);
  }

  const createUser = async () =>{
    try{
      const user = await DataStore.save(
        new User({
        "name": "Lorem ipsum dolor sit amet",
        "address": "Lorem ipsum dolor sit amet",
        "lat": 123.45,
        "lng": 123.45,
        "Orders": [],
        "Baskets": [],
        "sub": "Lorem ipsum dolor sit amet"
      })
    );
    } catch(e){ 
      Alert.alert("Error",e.message)
    }
  }


  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <Button onPress={onSave} title="Save" />
      <Button onPress={()=> Auth.signOut()} title="SignOut" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
