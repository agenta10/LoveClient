import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const InputBox = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={props.placeholder}
        value={props.text}
        onChangeText={props.onTextChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#ffffff",
    height: 50,
    width: 200,
    borderRadius: 50,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
export default InputBox;
