import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import colors from "../infastructure/themes/colors";

export default function StyledButton({
  text,
  color = colors.primary,
  textColor = "white",
}) {
  return (
    <Button mode="contained-tonal" buttonColor={color} textColor={textColor}>
      {text}
    </Button>
  );
}
