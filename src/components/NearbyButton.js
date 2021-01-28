import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const NearbyButton = (props) => {
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
    width: "30%",
  },
});
export default NearbyButton;
