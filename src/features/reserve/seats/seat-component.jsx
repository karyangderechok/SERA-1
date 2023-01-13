import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Chair from "../../../assets/chair";
import { FlatList } from "react-native-gesture-handler";

export const Page1 = ({ value }) => {
  const navigation = useNavigation();
  return (
    <View className="items-center flex grow">
      <FlatList
        data={[
          { id: 1, day: value },
          { id: 2, day: value },
          { id: 3, day: value },
          { id: 4, day: value },
          { id: 5, day: value },
          { id: 6, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 7, day: value },
          { id: 8, day: value },
          { id: 9, day: value },
          { id: 10, day: value },
          { id: 11, day: value },
          { id: 12, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 13, day: value },
          { id: 14, day: value },
          { id: 15, day: value },
          { id: 16, day: value },
          { id: 17, day: value },
          { id: 18, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 19, day: value },
          { id: 20, day: value },
          { id: 21, day: value },
          { id: 22, day: value },
          { id: 23, day: value },
          { id: 34, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 25, day: value },
          { id: 26, day: value },
          { id: 27, day: value },
          { id: 28, day: value },
          { id: 29, day: value },
          { id: 30, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 31, day: value },
          { id: 32, day: value },
          { id: 33, day: value },
          { id: 34, day: value },
          { id: 35, day: value },
          { id: 36, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
    </View>
  );
};

export const Page2 = ({ value }) => {
  const navigation = useNavigation();
  return (
    <View className="items-center flex grow">
      <FlatList
        data={[
          { id: 37, day: value },
          { id: 38, day: value },
          { id: 39, day: value },
          { id: 40, day: value },
          { id: 41, day: value },
          { id: 42, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 43, day: value },
          { id: 44, day: value },
          { id: 45, day: value },
          { id: 46, day: value },
          { id: 47, day: value },
          { id: 48, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 49, day: value },
          { id: 50, day: value },
          { id: 51, day: value },
          { id: 52, day: value },
          { id: 53, day: value },
          { id: 54, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 55, day: value },
          { id: 56, day: value },
          { id: 57, day: value },
          { id: 58, day: value },
          { id: 59, day: value },
          { id: 60, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 61, day: value },
          { id: 62, day: value },
          { id: 63, day: value },
          { id: 64, day: value },
          { id: 65, day: value },
          { id: 66, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
      <FlatList
        data={[
          { id: 67, day: value },
          { id: 68, day: value },
          { id: 69, day: value },
          { id: 70, day: value },
          { id: 71, day: value },
          { id: 72, day: value },
        ]}
        renderItem={({ item }) => {
          return (
            <View className="px-1">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Calendar", {
                    id: item.id,
                    day: item.day,
                  });
                }}>
                <Chair />
              </TouchableOpacity>
            </View>
          );
        }}
        horizontal
      />
    </View>
  );
};
