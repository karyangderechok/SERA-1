import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Container } from "../../../components/Container";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { ImageLogo } from "../../../components/Image";
import StyledButton from "../../../components/Button";

export default function Guidelines() {
  const navigation = useNavigation();
  return (
    <Container style={"justify-center items-center"}>
      <View className="flex w-full space-y-4 mb-4">
        <View className="items-center">
          <ImageLogo />
        </View>

        <Text className="text-center">
          Amids the Covid-19 pandemic, the MSU-IIT Main Library provides this
          online seat reservation registration for students, researchers, and
          staff use the library under the oandemic protocols.
        </Text>

        <Text>Guidelines in Reserving/Using the Main Library facilities</Text>

        <View className="space-y-1">
          <Text className="text-justify">
            1. Register validated ID at the User Monitoring System{" "}
          </Text>
          <Text className="text-justify">
            2. Present Vaccination Certificate
          </Text>
          <Text className="text-justify">
            3. Scan the QR code on the specific seat you reserved
          </Text>
          <Text className="text-justify">
            4. Transferring to one seat to another is sticktly prohibited unless
            requested and permitted
          </Text>
          <Text className="text-justify">
            5. Seat Reservation is available from Monday to Friday,
            8:00AM-5:00PM
          </Text>
          <Text className="text-justify">
            6. Stay at home if not feeling well and infrorm the cancel your
            reservation stating a valid reason
          </Text>
          <Text className="text-justify">
            7. On special cases or events, a written request address to the
            University Librarian is required
          </Text>
          <Text className="text-justify">
            8. Observe the health ans safety protocols inside the library
          </Text>
          <Text className="italic">
            *ForAlumni - Alumni ID or Old Student ID
          </Text>
        </View>
      </View>

      <View className="flex w-full">
        <TouchableOpacity onPress={() => navigation.navigate("Seat")}>
          <StyledButton text={"Check Seat"} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
