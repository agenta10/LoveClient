import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChangePhotosCard = (props) => {
  return (
    <View style={styles.contentStyle}>
      <TouchableOpacity onPress={props.navigate}>
        <ImageBackground
          style={styles.backgroundImageStyle}
          source={props.backgroundImage}
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contentStyle: {
    height: "100%",
    width: "40%",
  },
  backgroundImageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default ChangePhotosCard;
