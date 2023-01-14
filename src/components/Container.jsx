import { styled } from "nativewind";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const StyledSafeAreaView = styled(SafeAreaView, "dark:bg-black flex-auto");
export const StyledView = styled(View, "px-6 my-4 flex");

export const Container = ({ children, style }) => {
  return (
    <StyledSafeAreaView>
      <StyledView className={`${style}`}>{children}</StyledView>
    </StyledSafeAreaView>
  );
};
