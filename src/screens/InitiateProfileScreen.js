import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileCircle from "../components/ProfileCircle";
import InputBox from "../components/InputBox";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Ionicons";
const img = "../../assets/";
const image1 = require(img + "beach.jpg");

const InitiateProfileScreen = (props) => {
  const [bio, setBio] = useState("");
  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");

  return (
    <View style={styles.containerStyle}>
      <View style={styles.profilePictureStyle}>
        <ProfileCircle backgroundImage={image1} />
        <Icon.Button
          style={{ marginTop: "100%" }}
          name="pluscircleo"
          backgroundColor="transparent"
          color="violet"
          size={20}
        />
      </View>

      <Text>Welcome, Tanmay Maloo MC</Text>
      <InputBox placeholder="Enter your Bio" text={bio} onTextChange={setBio} />

      <View style={{ marginTop: 100 }}>
        <Text>Enter your hobbies</Text>
        <InputBox
          placeholder="Enter your hobby"
          text={hobby1}
          onTextChange={setHobby1}
        />
        <InputBox
          placeholder="Enter your hobby"
          text={hobby2}
          onTextChange={setHobby2}
        />
        <InputBox
          placeholder="Enter your hobby"
          text={hobby3}
          onTextChange={setHobby3}
        />
      </View>
      <View
        style={{
          marginTop: "35%",
          marginLeft: "80%",

          borderWidth: 2,
        }}
      >
        <Icon1.Button
          name="arrow-forward-circle"
          backgroundColor="transparent"
          color="violet"
          size={40}
          onPress={() => props.navigation.navigate("AddImages")}
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
});
export default InitiateProfileScreen;
