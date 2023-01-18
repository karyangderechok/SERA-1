import { TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Container } from "../../components/Container";
import { useNavigation } from "@react-navigation/native";
import QR from "../../assets/QR";
import Seat from "../../assets/chair";
import StyledButton from "../../components/Button";
import { Text } from "react-native-paper";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";

export default function Dashboard() {
  const navigation = useNavigation();
  const { onLogout, getAppointmentRequest, userData, fetchQR } = useContext(
    AuthenticationContext
  );

const college = userData.college.toLowerCase()

  return (
    <Container style={"items-center justify-center space-y-4"}>
      <Text className="text-lg font-bold">What do you want to do?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Reserve")}>
        <View className="items-center p-5 aspect-square w-3/5">
          <Seat width={72} height={72} />
          <View className="pt-4 w-full">
            <StyledButton text={"Reserve Chair"} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          fetchQR(college);

          setTimeout(() => {
            getAppointmentRequest();
          }, 1000);
          navigation.navigate("Allocate");
        }}
      >
        <View className="items-center p-5 aspect-square w-3/5">
          <QR />
          <View className="pt-4 w-full">
            <StyledButton text={"Scan QR"} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onLogout()}>
        <Text className="text-center text-lg">Log Out</Text>
      </TouchableOpacity>
    </Container>
  );
}
