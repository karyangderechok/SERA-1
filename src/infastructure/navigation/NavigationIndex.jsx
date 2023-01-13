import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AccountStack from "./AccountStack";
import AppNavigation from "./AppNavigation";

export default function NavigationIndex() {
  return (
    <NavigationContainer>
      {true ? <AppNavigation /> : <AccountStack />}
    </NavigationContainer>
  );
}
