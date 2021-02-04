import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import ProfileCircle from "../components/ProfileCircle";
import Icon1 from "react-native-vector-icons/Feather";
const NearbyName = (props) => {
  return (
    <View style={styles.viewStyle}>
      <ProfileCircle backgroundImage={props.image} />
      <TouchableOpacity onPress={props.onPress} style={styles.nearbyNameStyle}>
        <Text>{props.nameAndAgeText}</Text>
      </TouchableOpacity>
      <Icon1.Button
        name="message-circle"
        backgroundColor="transparent"
        color="violet"
        size={40}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  nearbyNameStyle: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: "grey",
    width: "70%",
  },
  viewStyle: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});
export default NearbyName;
