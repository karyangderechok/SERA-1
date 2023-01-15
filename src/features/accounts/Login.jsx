import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, TextInput as IconInput } from "react-native-paper";
import StyledButton from "../../components/Button";
import { Container } from "../../components/Container";
import { ImageLogo } from "../../components/Image";
import EmailInput from "../../components/TextInput";
import PasswordInput from "../../components/TextInput";
import colors from "../../infastructure/themes/colors";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [securePassword, setSecurePassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  const emailChecker = () =>
    email.includes("@g.msuiit.edu.ph")
      ? setEmailError(false)
      : setEmailError(true);

  const passwordSetIcon = () => {
    setSecurePassword(!securePassword);
    const icon = securePassword === false ? "eye" : "eye-outline";
    setPasswordIcon(icon);
  };

  const passwordChecker = () =>
    password.length >= 8 ? setPasswordError(false) : setPasswordError(true);

  return (
    <Container style={"justify-center items-center"}>
      <View className="flex w-full space-y-4">
        <View className="items-center">
          <ImageLogo />
        </View>

        <Text className="font-bold text-center text-2xl">Login</Text>

        <View>
          <EmailInput
            label={"Email Address"}
            mode="outlined"
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
            onChangeText={setEmail}
            error={emailError}
            onEndEditing={() => emailChecker()}
            helperText={"Must be a Valid Gmail Address"}
            right={
              <IconInput.Icon
                icon={"email"}
                forceTextInputFocus={false}
                color={(isTextInputFocused) =>
                  isTextInputFocused ? colors.primary : undefined
                }
              />
            }
            placeholder={"@g.msuiit.edu.ph"}
          />

          <PasswordInput
            label={"Password"}
            autoComplete="password"
            textContentType="password"
            onChangeText={setPassword}
            error={passwordError}
            onEndEditing={() => passwordChecker()}
            secureTextEntry={securePassword}
            helperText={"Password are greater than 8"}
            right={
              <IconInput.Icon
                icon={passwordIcon}
                forceTextInputFocus={false}
                color={(isTextInputFocused) =>
                  isTextInputFocused ? colors.primary : undefined
                }
                onPress={() => passwordSetIcon()}
              />
            }
            placeholder={"P@ssw0rd"}
          />
        </View>

        <TouchableOpacity>
          <StyledButton text={"Login"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-center">
            Don't have an account?{" "}
            <Text className="font-bold text-primary">Register Here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
