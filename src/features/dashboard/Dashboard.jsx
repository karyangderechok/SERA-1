import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Container } from "../../components/Container";
import { useNavigation } from "@react-navigation/native";
import QR from "../../assets/QR";
import Seat from "../../assets/chair";
import StyledButton from "../../components/Button";
import { Text } from "react-native-paper";

export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <Container style={"items-center justify-center space-y-4"}>
      <Text className='text-lg font-bold'>What do you want to do?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Reserve")}>
        <View className="items-center p-5 aspect-square w-3/5">
          <Seat width={72} height={72} />
          <View className="pt-4 w-full">
            <StyledButton text={"Reserve Chair"} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Allocate")}>
        <View className="items-center p-5 aspect-square w-3/5">
          <QR />
          <View className="pt-4 w-full">
            <StyledButton text={"Scan QR"} />
          </View>
        </View>
      </TouchableOpacity>
    </Container>
  );
}
