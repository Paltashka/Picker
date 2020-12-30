import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import TakeOrderScreen from "../screens/TakeOrderScreen";
import OrderScreen from "../screens/OrderScreen";
import PickedScreen from "../screens/PickedScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="TakeOrder" component={TakeOrderScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Picked" component={PickedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
