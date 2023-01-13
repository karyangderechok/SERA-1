import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QR from "../../features/allocate/QR";

const Stack = createNativeStackNavigator();
const QRScreen = () => <QR />;

export default function AllocateStack() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="QR" component={QRScreen} />
    </Stack.Navigator>
  );
}
