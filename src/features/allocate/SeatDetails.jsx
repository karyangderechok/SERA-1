import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { Container } from "../../components/Container";
import { ImageLogo } from "../../components/Image";

export default function SeatDetails() {
  const [value, setValue] = useState();
  const navigation = useNavigation();

  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>

      <Text className="text-lg">Seat {}</Text>
      <View>
        <Text>Reservation Details</Text>
        <Text>Date: {}</Text>
        <Text>Time: {}</Text>
        <Text>Student ID: {}</Text>
      </View>
      <Text className="italic">Is this your details?</Text>
      <RadioButton.Group
        value={value}
        onValueChange={(item) => {
          if (item === "yes") {
            navigation.navigate("Confirm");
          } else {
            navigation.navigate('QR')
          }
        }}>
        <View className="items-center space-x-4">
          <View className="justify-center">
            <RadioButton value="yes" />
            <Text>Yes</Text>
          </View>

          <View className="justify-center">
            <RadioButton value="no" />
            <Text>No</Text>
          </View>
        </View>
      </RadioButton.Group>
    </Container>
  );
}
