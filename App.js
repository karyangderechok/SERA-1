import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationIndex from "./src/infastructure/navigation/NavigationIndex";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationIndex />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
