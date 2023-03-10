import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Guidelines from "../../features/reserve/guidelines/Guidelines";
import Seat from "../../features/reserve/seats/Seat";
import Calendars from "../../features/reserve/calendar/Calendars";
import Confirmation from "../../features/reserve/confirmation/Confirmation";
import ReservationDetails from "../../features/reserve/details/ReservationDetails";

const Stack = createNativeStackNavigator();
const GuidlinesScreen = () => <Guidelines />;
const SeatScreen = () => <Seat />;
const CalendaScreen = () => <Calendars />;
const ReservationDetailsScreen = () => <ReservationDetails />;
const ConfirmationScreen = () => <Confirmation />;

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
      <Stack.Screen
        name="Reservation Details"
        component={ReservationDetailsScreen}
      />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
}
