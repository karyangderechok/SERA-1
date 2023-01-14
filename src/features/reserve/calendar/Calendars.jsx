import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { ImageLogo } from "../../../components/Image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import { Modal, Portal, Text } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import StyledButton from "../../../components/Button";
import colors from "../../../infastructure/themes/colors";

export default function Calendars({ route }) {
  const navigation = useNavigation();
  const { id, day } = useRoute(route).params;

  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);

  const data = [
    { label: "08:00 AM", value: "08:00 AM" },
    { label: "08:30 AM", value: "08:30 AM" },
    { label: "09:00 AM", value: "09:00 AM" },
    { label: "09:30 AM", value: "09:30 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "10:30 AM", value: "10:30 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "11:30 AM", value: "11:30 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "12:30 PM", value: "12:30 PM" },
    { label: "13:00 PM", value: "13:00 PM" },
    { label: "13:30 PM", value: "13:30 PM" },
    { label: "14:00 PM", value: "14:00 PM" },
    { label: "14:30 PM", value: "14:30 PM" },
    { label: "15:00 PM", value: "15:00 PM" },
    { label: "15:30 PM", value: "15:30 PM" },
    { label: "16:00 PM", value: "16:00 PM" },
    { label: "16:30 PM", value: "16:30 PM" },
    { label: "17:00 PM", value: "17:00 PM" },
  ];

  data.reverse();

  const [isFocus, setIsFocus] = useState(false);

  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const mark = `${year}-0${month + 1}-${day}`;

  const checker = () => {
    if (timeIn && timeOut !== null) {
      navigation.navigate("Reservation Details", {
        id: id,
        date: mark,
        from: timeIn,
        to: timeOut,
      });
    } else {
      <Modal visible={true}>
        <Text>Please select schedule time</Text>
      </Modal>;
    }
  };

  return (
    <Container>
      <View className="items-center">
        <ImageLogo />
      </View>
      <Text className="text-2xl mb-4">Seat 1</Text>
      <View className="p-3">
        <Calendar
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // Show week numbers to the left. Default = false
          // Disable left arrow. Default = false
          disableArrowLeft={true}
          // Disable right arrow. Default = false
          disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={(date) => {
            return (
              <Text>
                Chair <Text className="font-bold">{id}</Text> on day{" "}
                <Text className="font-bold">{day}</Text>
              </Text>
            );
          }}
          markedDates={{
            [mark]: { selected: true, selectedColor: colors.primary },
          }}
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
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Time"}
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
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"Time"}
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

      <TouchableOpacity onPress={() => checker()}>
        <View className="mt-4">
          <StyledButton text={"Reserve Seat"} />
        </View>
      </TouchableOpacity>
    </Container>
  );
}
