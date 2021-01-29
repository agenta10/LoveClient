import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileCircle from "../components/ProfileCircle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
const img = "../../assets/";
const image1 = require(img + "beach.jpg");

const InitiateProfileScreen = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.profilePictureStyle}>
        <ProfileCircle backgroundImage={image1} />
        <Icon2.Button
          style={{ marginTop: "100%" }}
          name="pluscircleo"
          backgroundColor="transparent"
          color="violet"
          size={20}
        />
      </View>

      <Text>Welcome, Tanmay Maloo MC</Text>
      <View style={styles.cameraStyle}>
        <Icon.Button
          name="camera-plus-outline"
          backgroundColor="transparent"
          color="violet"
          size={60}
          onPress={() => props.navigation.navigate("AddImages")}
        />
        <Icon.Button
          name="camera-plus-outline"
          backgroundColor="transparent"
          color="violet"
          size={60}
        />
        <Icon.Button
          name="camera-plus-outline"
          backgroundColor="transparent"
          color="violet"
          size={60}
        />
        <Icon.Button
          name="camera-plus-outline"
          backgroundColor="transparent"
          color="violet"
          size={60}
        />
      </View>
      <View>
        <Icon1.Button
          style={{ marginTop: "95%", marginLeft: "80%" }}
          name="arrow-forward-circle"
          backgroundColor="transparent"
          color="violet"
          size={40}
          onPress={() => props.navigation.navigate("Feed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
  profilePictureStyle: {
    flexDirection: "row",
  },
  cameraStyle: {
    flexDirection: "row",
    marginTop: "20%",
  },
});
export default InitiateProfileScreen;
