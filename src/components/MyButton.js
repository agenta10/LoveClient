import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: "grey",
  },
});
export default MyButton;
