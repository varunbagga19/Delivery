import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native"
import config from "./src/aws-exports"
import AuthContextProvider from "./src/Contexts/AuthContext";
import BasketContextProvider from "./src/Contexts/BasketContext";

Amplify.configure({
  ...config,
   Analytics:{
  disabled:true,
}})

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider> 
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);