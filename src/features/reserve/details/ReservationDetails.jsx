import { TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { Container } from "../../../components/Container";
import StyledButton from "../../../components/Button";
import { ImageLogo } from "../../../components/Image";
import { AuthenticationContext } from "../../../authentication/AuthenticationContext";

export default function ReservationDetails({ route }) {
  const navigation = useNavigation();
  const { id, date, from, to } = useRoute(route).params;
  const { userData } = useContext(AuthenticationContext);

  const monthString = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
    "December",
  ];

  const value = date.split("-");
  const year = value[0];
  const month = value[1];
  const day = value[2];

  const stringMonth = monthString[(month <= 9 ? month.charAt(1) : month) - 1];

  const appointmentDay = stringMonth + " " + day + ", " + year;
  const time = from + " - " + to;

  return (
    <Container style={"grow"}>
      <View className="items-center">
        <ImageLogo />
      </View>
      <Text className="text-lg">Seat {id}</Text>
      <Text className="font-bold italic">Reservation date and time</Text>
      <View className="my-4 border rounded-md">
        <Text className="text-lg">Reservation Details:</Text>
        <Text>Date: {appointmentDay}</Text>
        <Text>
          Time: {from} - {to}
        </Text>
        <Text>
          Occupant: {userData.email} <Text>({userData.idNumber})</Text>
        </Text>
      </View>

      <View className="justify-end items-center">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Confirmation", {
              date: appointmentDay,
              time: time,
            })
          }>
          <StyledButton text={"Confirm"} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
