import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationIndex from "./src/infastructure/navigation/NavigationIndex";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider>
        <NavigationIndex />
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
