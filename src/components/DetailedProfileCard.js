import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Feather";
const DetailedProfileCard = (props) => {
  return (
    <View style={styles.contentStyle}>
      <ImageBackground
        style={styles.backgroundImageStyle}
        source={props.backgroundImage}
      >
        <View style={styles.arrowStyle}>
          <View style={{ marginLeft: "5%" }}>
            <Icon.Button
              name="angle-left"
              backgroundColor="transparent"
              color="orange"
              size={40}
            />
          </View>
          <View style={{ marginLeft: "65%" }}>
            <Icon.Button
              name="angle-right"
              backgroundColor="transparent"
              color="orange"
              size={40}
            />
          </View>
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconStyle}>
            <Icon.Button
              name="star"
              backgroundColor="transparent"
              color="violet"
              size={40}
            />
          </View>
          <View style={styles.iconStyle}>
            <Icon.Button
              name="video-camera"
              backgroundColor="transparent"
              color="violet"
              size={40}
            />
          </View>
          <View style={styles.iconStyle}>
            <Icon1.Button
              name="message-circle"
              backgroundColor="transparent"
              color="violet"
              size={40}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  contentStyle: {
    height: "80%",
    width: "80%",
  },
  backgroundImageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  textStyle: {
    padding: 10,
  },
  iconContainer: {
    borderRadius: 30,
    marginTop: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  arrowStyle: {
    flexDirection: "row",
    marginTop: "60%",
  },
});

export default DetailedProfileCard;
