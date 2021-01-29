import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const MySmallButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "grey",
  },
});
export default MySmallButton;
