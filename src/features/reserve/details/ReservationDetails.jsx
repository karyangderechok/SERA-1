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
  const { userData, appointmentRequest } = useContext(AuthenticationContext);

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
      <View className='grow'>
        <View className="items-center">
          <ImageLogo />
        </View>
        <Text className="text-2xl my-4">Seat {id}</Text>
        <Text className="font-bold italic">Reservation date and time</Text>
        <View className="my-4 p-2 border rounded-md bg-primary">
          <Text className="text-white text-lg">Reservation Details:</Text>
          <Text className="text-white text-lg">Date: {appointmentDay}</Text>
          <Text className="text-white text-lg">
            Time: {from} - {to}
          </Text>
          <Text className="text-white text-lg">
            Occupant: {userData.email}{" "}
            <Text className="text-white text-lg">({userData.idNumber})</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          appointmentRequest(id, appointmentDay, time);
          navigation.navigate("Confirmation", {
            date: appointmentDay,
            time: time,
          });
        }}>
        <StyledButton text={"Confirm"} />
      </TouchableOpacity>
    </Container>
  );
}
