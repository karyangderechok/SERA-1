import React from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

export default function StyledTextInput({
  label,
  mode = "outlined",
  autoCapitalize = "none",
  keyboardType = "default",
  autoComplete,
  textContentType,
  importantForAutofill = "yes",
  autoCorrect = false,
  onChangeText,
  error = false,
  blurOnSubmit = true,
  onEndEditing,
  maxLength = 32,
  secureTextEntry,
  onFocus,
  left,
  right,
  helperText,
  info = false,
  infoText,
  editable = true,
  value,
  placeholder,
}) {
  return (
    <View className="pb-4">
      <TextInput
        label={label}
        mode={mode}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        textContentType={textContentType}
        importantForAutofill={importantForAutofill}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        error={error}
        blurOnSubmit={blurOnSubmit}
        onEndEditing={onEndEditing}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        left={left}
        right={right}
        editable={editable}
        placeholder={placeholder}
        value={value}
      />
      {error && <HelperText type="error">{helperText}</HelperText>}
      {info && <HelperText type="info">{infoText}</HelperText>}
    </View>
  );
}
