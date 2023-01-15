import { View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Container } from "../../components/Container";
import { useState } from "react";
import {
  ActivityIndicator,
  Checkbox,
  Text,
  TextInput as IconInput,
} from "react-native-paper";
import EmailInput from "../../components/TextInput";
import PasswordInput from "../../components/TextInput";
import IDNumberInput from "../../components/TextInput";
import colors from "../../infastructure/themes/colors";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { ImageLogo } from "../../components/Image";
import StyledButton from "../../components/Button";
import { AuthenticationContext } from "../../authentication/AuthenticationContext";

export default function Register() {
  const { registerRequest, errorCreateAccount, isLoading } = useContext(
    AuthenticationContext
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [idNumberError, setIdNumberError] = useState("");

  const [securePassword, setSecurePassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  const [condition, setCondition] = useState(false);
  const [isConditionTrue, setIsConditionTrue] = useState(false);

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

  const IDNumberCHecker = () =>
    idNumber.length >= 1 && idNumber.length <= 8
      ? setIdNumberError(false)
      : setIdNumberError(true);

  const conditionCheck = () =>
    condition !== true ? setIsConditionTrue(true) : setIsConditionTrue(false);

  const collegeName = [
    { label: "COET", value: "COET" },
    { label: "COA", value: "COA" },
    { label: "EDUC", value: "EDUC" },
    { label: "CSS", value: "CSS" },
    { label: "CON", value: "CONT" },
    { label: "BSIAM", value: "BSIAM" },
    { label: "BSBIO", value: "BSBIO" },
  ];

  const [college, setCollege] = useState();

  const [isFocus, setIsFocus] = useState(false);

  const onPress = () => {
    email && password && college && condition === true
      ? registerRequest(email, password, idNumber, college)
      : console.log(false);
  };

  return (
    <Container style={"justify-center items-center"}>
      <View className="flex w-full space-y-4">
        <View className="items-center">
          <ImageLogo />
        </View>

        <View>
          <EmailInput
            label={"Email Address"}
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

          <IDNumberInput
            label={"ID Number"}
            keyboardType="numeric"
            autoComplete="off"
            textContentType="none"
            onChangeText={setIdNumber}
            error={idNumberError}
            onEndEditing={() => IDNumberCHecker()}
            helperText={"Must be a Valid Gmail Address"}
            right={
              <IconInput.Icon
                icon={"phone"}
                forceTextInputFocus={false}
                color={(isTextInputFocused) =>
                  isTextInputFocused ? colors.primary : undefined
                }
              />
            }
            placeholder={"@g.msuiit.edu.ph"}
          />

          <View>
            <Dropdown
              className="border border-gray-400 rounded-md border-1 h-10 px-2 bg-white mb-2"
              style={isFocus && { borderColor: "blue" }}
              placeholderStyle={{ fontSize: 14 }}
              selectedTextStyle={{ fontSize: 14 }}
              data={collegeName}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={"Set College"}
              value={college}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setCollege(item.value);
                setIsFocus(false);
              }}
            />
          </View>

          <View>
            <View className="flex flex-row">
              <Checkbox
                status={condition ? "checked" : "unchecked"}
                onPress={() => {
                  setCondition(!condition);
                  setIsConditionTrue(false);
                }}
                color={colors.primary}
              />
              <Text className="w-screen">
                I agree to the{" "}
                <Text className="font-bold">terms & Conditions</Text> and{"\n"}
                <Text className="font-bold"> Privacy Policy</Text>
              </Text>
            </View>
            {isConditionTrue && (
              <HelperText type="error">
                Please Check the terms & Conditions
              </HelperText>
            )}
          </View>
        </View>

        {errorCreateAccount && (
          <Text className="text-center font-bold text-red-500 mb-4 border border-red-500 p-4 rounded-lg">
            {errorCreateAccount}
          </Text>
        )}

        {!isLoading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPress={() => onPress()}>
            <StyledButton text={"Create Account"} />
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
}
