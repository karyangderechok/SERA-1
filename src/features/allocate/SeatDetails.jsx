import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";
import { Container } from "../../components/Container";
import { ImageLogo } from "../../components/Image";

export default function SeatDetails() {
  const [value, setValue] = useState();
  const navigation = useNavigation();
  const { appointments, userData } = useContext(AuthenticationContext);
  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>

      <Text className="text-2xl">Seat {appointments.seatNumber}</Text>
      <View className="p-2 border rounded-md bg-primary my-4">
        <Text className="text-white text-lg">Reservation Details</Text>
        <Text className="text-white text-lg">
          Date: {appointments.reservationDay}
        </Text>
        <Text className="text-white text-lg">
          Time: {appointments.reservationTime}
        </Text>
        <Text className="text-white text-lg">
          Student ID: {userData.idNumber}
        </Text>
      </View>
      <Text className="italic">Is this your details?</Text>

      <View className="items-center">
        <RadioButton.Group
          value={value}
          onValueChange={(item) => {
            if (item === "yes") {
              navigation.navigate("Confirm");
            } else {
              navigation.navigate("QR");
            }
          }}>
          <View className="space-x-4 flex-row">
            <View className="flex-row items-center justify-center">
              <RadioButton value="yes" />
              <Text>Yes</Text>
            </View>

            <View className="flex-row items-center justify-center">
              <RadioButton value="no" />
              <Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </Container>
  );
}
