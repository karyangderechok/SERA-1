import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guidelines from "../../features/reserve/guidelines/Guidelines";
import Seat from "../../features/reserve/seats/Seat";
import Calendars from "../../features/reserve/calenda/Calendar";

const Stack = createNativeStackNavigator();
const GuidlinesScreen = () => <Guidelines />;
const SeatScreen = () => <Seat />;
const CalendaScreen = () => <Calendars />;

export default function ReserveStack() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="Guidlines" component={GuidlinesScreen} />
      <Stack.Screen name="Seat" component={SeatScreen} />
      <Stack.Screen name="Calendar" component={CalendaScreen} />
    </Stack.Navigator>
  );
}
