import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../features/dashboard/Dashboard";
import AllocateStack from "./AllocateStack";
import ReserveStack from "./ReserveStack";

const Stack = createNativeStackNavigator();
const DashboardScreen = () => <Dashboard />;
const ReserveStackScreen = () => <ReserveStack />;
const AllocateStackScreen = () => <AllocateStack />;

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Reserve" component={ReserveStackScreen} />
      <Stack.Screen name="Allocate" component={AllocateStackScreen} />
    </Stack.Navigator>
  );
}
