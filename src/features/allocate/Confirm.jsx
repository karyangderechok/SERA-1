import { View, Text } from "react-native";
import React from "react";
import { Container } from "../../components/Container";
import { ImageLogo } from "../../components/Image";
import StyledButton from "../../components/Button";

export default function Confirm() {
  return (
    <Container className='justify-center space-y-4'>
      <ImageLogo />

      <Text className='text-lg italic text-primary'>Seat Found</Text>
      <Text className='text-lg'>Great! Enjoy your stay</Text>
      <Text className='italic text-primary'>
        *After the scheduled time, please click the Done button, before you exit
        the facility{" "}
      </Text>

      <StyledButton text={"Done"} />
    </Container>
  );
}
