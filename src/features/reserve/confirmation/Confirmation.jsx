import { TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Container } from "../../../components/Container";
import { ImageLogo } from "../../../components/Image";
import { Text } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import StyledButton from "../../../components/Button";
import { AuthenticationContext } from "../../../authentication/AuthenticationContext";

export default function Confirmation({ route }) {
  const { date, time } = useRoute(route).params;
  const { userData } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>

      <Text className="text-center text-2xl mb-8">Seat Reserved!</Text>

      <View className="bg-secondary border rounded-md p-2 mb-4">
        <Text className="text-lg italic">Date: {date}</Text>
        <Text className="text-lg italic">Time: {time}</Text>
        <Text className="text-lg italic">
          Student ID Number: {userData.idNumber}
        </Text>
      </View>

      <View className='grow mt-8'>
        <Text className="text-center italic">
          *Please bring your Vaccination certificate and present upon entering
          the facility
        </Text>
        <Text className="text-center italic">
          ** After your reserved time, please exit the facility immediately
        </Text>
        <Text className="text-center italic">
          *** Use the SeRA Scanner to scan the QR code of the seat you reserved
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dashboard");
        }}>
        <StyledButton text={"SeRA Scanner"} />
      </TouchableOpacity>
    </Container>
  );
}
