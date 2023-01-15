import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QR from "../../features/allocate/QR";
import SeatDetails from "../../features/allocate/SeatDetails";
import Confirm from "../../features/allocate/Confirm";

const Stack = createNativeStackNavigator();
const QRScreen = () => <QR />;
const SeatDetailsScreen = () => <SeatDetails />;
const ConfirmScreen = () => <Confirm />;

export default function AllocateStack() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="QR" component={QRScreen} />
      <Stack.Screen name="Seat Details" component={SeatDetailsScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
    </Stack.Navigator>
  );
}
