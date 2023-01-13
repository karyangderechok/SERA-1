import { View, Text } from "react-native";
import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { ImageLogo } from "../../../components/Image";
import { RadioButton } from "react-native-paper";
import colors from "../../../infastructure/themes/colors";
import { Page1, Page2 } from "./seat-component";
import { Dropdown } from "react-native-element-dropdown";

export default function Seat1() {
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
  const date = new Date();
  const month = date.getMonth();
  const [page, setPage] = useState("1");

  function daysInMonth() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date(year, month, 0);
    const days = [];
    for (let i = 1; i <= date.getDate(); i++) {
      days.push({ label: `${i}`, value: `${i}` });
    }
    return days;
  }

  const data = daysInMonth();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>

      <Text className="text-xl">Month</Text>
      <Text className="text-xl">of</Text>
      <View className="flex-row items-center">
        <View>
          <Text className="text-2xl font-bold">{monthString[month]}</Text>
        </View>
        <View className="grow items-end">
          <View className="w-1/3">
            <Dropdown
              className="border border-gray-400 rounded-md border-1 h-10 px-2"
              style={isFocus && { borderColor: "blue" }}
              placeholderStyle={{ fontSize: 14 }}
              selectedTextStyle={{ fontSize: 14 }}
              containerStyle={{ paddingTop: 0, marginTop: 0 }}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"Date"}
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
      </View>

      <Text className="text-center">
        Click a seat to place your reservation request
      </Text>

      {page === "1" ? <Page1 value={value} /> : <Page2 value={value} />}

      <RadioButton.Group
        value={page}
        onValueChange={(data) => {
          setPage(data);
        }}>
        <View className="flex-row space-x-4 justify-center items-center">
          <View className="flex-row space-x-1 justify-center items-center">
            <Text className="text-lg">1</Text>
            <RadioButton value="1" color={colors.primary} />
          </View>
          <View className="flex-row space-x-1 justify-center items-center">
            <Text className="text-lg">2</Text>
            <RadioButton value="2" color={colors.primary} />
          </View>
        </View>
      </RadioButton.Group>
    </Container>
  );
}
