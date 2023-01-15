import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { collegeQR } = useContext(AuthenticationContext);
  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    let hasSameData = false;
    collegeQR.forEach((element) => {
      if (element.data === data) {
        hasSameData = true;
      }
    });
    if (hasSameData) {
      navigation.navigate("Seat Details");
    } else {
      alert(
        "Please look at the number on the seat and the choosen seat number you reserved"
      );
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned ? (
          <ActivityIndicator size={100}/>
        ) : (
          <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
        )}
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
