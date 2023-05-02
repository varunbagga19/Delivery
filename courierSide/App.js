
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import orders from './assets/data/orders.json';
import OrderItem from './src/components/OrderItem';
import { FlatList } from 'react-native';
import OrderScreen from './src/Screens/OrderScreen';
import OrderDelivery from './src/Screens/OrderDelivery';

export default function App() {
  return (
    <View style={styles.container}>
       <OrderDelivery/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
