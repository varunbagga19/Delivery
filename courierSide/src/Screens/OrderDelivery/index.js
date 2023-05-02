import {View,Text} from 'react-native';
import {useRef,useMemo} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5 } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';

const OrderDelivery = ()=>{

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(()=>["12%","95%"],[]);

    return(
        <View style={{marginTop:10, backgroundColor:"lightblue",flex:1}}>
           <BottomSheet 
           ref={bottomSheetRef} 
           snapPoints={snapPoints} 
           handleIndicatorStyle={{backgroundcolor:'grey',width:100}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:25,letterSpacing:1}}>14 min</Text>
                <FontAwesome5 style={{marginHorizontal:10}} name="shopping-bag" size={24} color="#3FC060"/>
                <Text style={{fontSize:25,letterSpacing:1}}>5 km</Text>
            </View>
            <View>

            </View>
           </BottomSheet>
        </View>
    )
}

export default OrderDelivery;