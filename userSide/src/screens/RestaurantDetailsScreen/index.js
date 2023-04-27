import { View, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header";
import styles from "./styles";
import { useState,useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";
import { Restaurant } from "../../models";
import "@azure/core-asynciterator-polyfill"; 
import { useBasketContext } from "../../Contexts/BasketContext";


const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  // console.warn(id);

  const{setRestaurant:setBasketRestaurant} = useBasketContext();
  const[restaurant,setRestaurants] = useState(null);
  const[dishes,setDishes] = useState([]);

  

  useEffect(()=>{
    if(!id){
      return;
    }
    setBasketRestaurant(null);
       DataStore.query(Restaurant,id).then(setRestaurants);

       DataStore.query(Dish , (dish) => dish.restaurantID.eq(id) ).then(setDishes);

  },[id]);


  useEffect(()=>{
    setBasketRestaurant(restaurant);
  },[restaurant])
  console.log("restaurant");
  console.log(restaurant);
  console.log("dishes");
  console.log(dishes);


  if(!restaurant){
    return <ActivityIndicator size={"large"}/>
  }

  return (

    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      {/* <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      /> */}
    </View>
  );
};

export default RestaurantDetailsPage;
