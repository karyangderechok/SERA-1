import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import AccountStack from "./AccountStack";
import AppNavigation from "./AppNavigation";

export default function NavigationIndex() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountStack />}
    </NavigationContainer>
  );
}
