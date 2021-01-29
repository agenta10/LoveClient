import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Octicons";

const FeedCard = (props) => {
  return (
    <View style={styles.contentStyle}>
      <TouchableOpacity  onPress={props.navigate}>
        <ImageBackground
          style={styles.backgroundImageStyle}
          source={props.backgroundImage}
        >
          <View style={styles.nameContainer}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text style={styles.textStyle}>23</Text>
            <Icon.Button
              name="primitive-dot"
              backgroundColor="grey"
              color="green"
            />
          </View>
        </ImageBackground>
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
  textStyle: {
    padding: 10,
  },
  nameContainer: {
    borderRadius: 30,
    marginTop: "80%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "grey",
  },
});

export default FeedCard;
