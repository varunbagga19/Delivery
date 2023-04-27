import { createContext,useState,useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import {Basket,BasketDish} from "../screens/Basket";
import {useAuthContext} from './AuthContext'


const BasketContext = createContext({});


const BasketContextProvider = ({children})=>{
    const {dbUser} = useAuthContext();

    const [restaurant,setRestaurant] = useState(null);
    const [basket,setBasket] = useState(null);

   
    // useEffect(()=>{
    //     DataStore.query(Basket,(b) => b.restaurantID.eq(restaurant.id).userID.eq(dbUser.id)).then((baskets) => setBasket(baskets[0]))
    // },[dbUser,restaurant])

    const addDishToBasket = async (dish,quantity) => {
        ///get the existing basket or create a new one
        let theBasket = basket || await createNewBasket();
    //    console.log(dish,quantity)
        //create a BasketDish item and save to DataStore


    }

    const createNewBasket = async ()=>{
        const newBasket = await DataStore.save(
            new Basket({userID:dbUser.id,restaurantID:restaurant.id})
            )
            setBasket(newBasket);
            return newBasket;
    }
    return(
        <BasketContext.Provider value={{ addDishToBasket , setRestaurant}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);