import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../contexts/AuthProvider";

import SignInScreen from "../screens/SignInScreen";
import TakeOrderScreen from "../screens/TakeOrderScreen";
import OrderScreen from "../screens/OrderScreen";
import PickedScreen from "../screens/PickedScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TakeOrder" component={TakeOrderScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Picked" component={PickedScreen} />
    </Stack.Navigator>
  );
};

function AppNavigator() {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      {currentUser ? <AppStack /> : <SignInScreen />}
    </NavigationContainer>
  );
}

export default AppNavigator;
