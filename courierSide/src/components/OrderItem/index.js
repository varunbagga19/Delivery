import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import orders from '../../../assets/data/orders.json';
import { Entypo } from '@expo/vector-icons';
const order = orders[0];

const OrderItem= ({order}) => {
  return (
      <View 
      style= {{
        flexDirection:'row',
        margin:10,
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        }}
        >
      
      <Image 
      source={{uri:order.Restaurant.image}} 
      style ={{
        width:"25%",
        height:"100%",
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
        }}/>
      <View 
      style={{
        flex:1,
        marginLeft:10,
        paddingVertical:5}}>
          <Text style={{fontSize:18,fontWeight:'500'}} >
          {order.Restaurant.name}
          </Text>
          <Text style={{color:'grey'}}>{order.Restaurant.address}</Text>
          <Text style={{marginTop:10}}>Delivery Details:</Text>
          <Text style={{color:'grey'}}>{order.User.name}</Text>
          <Text style={{color:'grey'}}>{order.User.address}</Text>
      </View>

      <View 
      style={{
        padding:5,
        backgroundColor:'#3FC060',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
        }}>
        <Entypo 
        name="check" 
        size={24} 
        color="black"
        style={{marginLeft:'auto'}}
        />
       </View>
      </View>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
