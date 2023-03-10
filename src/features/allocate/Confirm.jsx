import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Container } from "../../components/Container";
import { ImageLogo } from "../../components/Image";
import StyledButton from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";

export default function Confirm() {
  const navigation = useNavigation();
  const {deleteAppointment, user} = useContext(AuthenticationContext)
  return (
    <Container style={"grow"}>
      <View className="items-center">
        <ImageLogo />
      </View>
      <Text className="text-center text-2xl italic text-primary">
        Seat Found!
      </Text>
      <View className="flex grow justify-center">
        <Text className="text-center text-2xl">Great! Enjoy your stay</Text>
      </View>
      <Text className="text-center italic text-primary my-10">
        *After the scheduled time, please click the Done button, before you exit
        the facility{" "}
      </Text>

      <TouchableOpacity onPress={() => {navigation.navigate("Dashboard")
      deleteAppointment(user.uid)
    }}>
        <StyledButton text={"Done"} />
      </TouchableOpacity>
    </Container>
  );
}
