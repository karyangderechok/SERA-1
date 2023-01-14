import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { ImageLogo } from "../../../components/Image";
import { useNavigation, useRoute } from "@react-navigation/native";
import Calendar from "react-native-calendar";
import { Button, Text } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";
import { Dropdown } from "react-native-element-dropdown";
import StyledButton from "../../../components/Button";

export default function Calendars({ route }) {
  const navigation = useNavigation();
  const { id, day } = useRoute(route).params;

  const [timeIn, setTimeIn] = useState();
  const [timeOut, setTimeOut] = useState();

  const time = [
    { label: "8:00", id: "1" },
    { label: "8:30", id: "2" },
    { label: "9:00", id: "3" },
    { label: "9:30", id: "4" },
    { label: "10:00", id: "5" },
    { label: "10:30", id: "6" },
    { label: "11:00", id: "7" },
    { label: "11:30", id: "8" },
    { label: "10:00", id: "9" },
    { label: "11:00", id: "10" },
    { label: "11:00", id: "11" },
    { label: "12:00", id: "12" },
    { label: "12:00", id: "13" },
    { label: "13:00", id: "14" },
    { label: "13:00", id: "15" },
    { label: "14:00", id: "16" },
    { label: "14:00", id: "17" },
    { label: "15:00", id: "18" },
    { label: "15:00", id: "19" },
    { label: "16:00", id: "20" },
    { label: "16:00", id: "21" },
    { label: "17:00", id: "22" },
    { label: "17:00", id: "23" },
  ];

  const [isFocus, setIsFocus] = useState(false);

  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const mark = `${year}-${month}-${day}`;
  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>
      <Text className="text-2xl mb-4">Seat 1</Text>
      <View className="p-3">
        <Calendar
          markedDates={{ mark: { marked: true, selectedColor: "blue" } }}
        />
      </View>

      <View className="flex-row space-x-2 mt-2">
        <View className="w-1/2">
          <View className="flex-row items-center">
            <Text className="mr-2 text-lg">From</Text>
            <View className="w-1/2">
              <Dropdown
                className="border border-gray-400 rounded-md border-1 h-10 px-2"
                style={isFocus && { borderColor: "blue" }}
                placeholderStyle={{ fontSize: 14 }}
                selectedTextStyle={{ fontSize: 14 }}
                containerStyle={{ paddingTop: 0, marginTop: 0 }}
                data={time}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Date"}
                value={timeIn}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setTimeIn(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
        </View>

        <View className="w-1/2">
          <View className="flex-row items-center justify-end">
            <Text className="mr-2 text-lg">To</Text>
            <View className="w-1/2">
              <Dropdown
                className="border border-gray-400 rounded-md border-1 h-10 px-2"
                style={isFocus && { borderColor: "blue" }}
                placeholderStyle={{ fontSize: 14 }}
                selectedTextStyle={{ fontSize: 14 }}
                containerStyle={{ paddingTop: 0, marginTop: 0 }}
                data={time}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Date"}
                value={timeOut}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setTimeOut(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("", {
            id: id,
            date: mark,
          })
        }>
        <View className="mt-4">
          <StyledButton text={"Reserve Seat"} />
        </View>
      </TouchableOpacity>
    </Container>
  );
}
