import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../features/accounts/Login";
import Register from "../../features/accounts/Register";

const Stack = createNativeStackNavigator();
const LoginScreen = () => <Login />;
const RegisterScreen = () => <Register />;

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
