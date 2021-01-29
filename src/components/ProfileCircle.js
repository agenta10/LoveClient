import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const DetailedProfileCard = (props) => {
  return (
    <ImageBackground
      style={styles.backgroundImageStyle}
      source={props.backgroundImage}
    ></ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImageStyle: {
    borderRadius: 100,
    overflow: "hidden",
    padding: 10,
    height: 70,
    width: 70,
  },
});

export default DetailedProfileCard;
