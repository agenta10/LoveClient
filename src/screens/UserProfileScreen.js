import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileCircle from "../components/ProfileCircle";
import InputBox from "../components/InputBox";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Ionicons";

const img = "../../assets/";
const image1 = require(img + "beach.jpg");

const InitiateProfileScreen = (props) => {
  const [bio, setBio] = useState("Whatever the bio");
  const [hobby1, setHobby1] = useState("Swimming");
  const [hobby2, setHobby2] = useState("Dancing");
  const [hobby3, setHobby3] = useState("Painting");
  const [name, setName] = useState("Malu");

  return (
    <View>
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

        <Text onPress={() => props.navigation.navigate("ChangePhotos")}>
          Change Photos
        </Text>
        <Text>Name</Text>
        <InputBox placeholder={name} text={name} onTextChange={setName} />
        <InputBox
          placeholder="Enter your Bio"
          text={bio}
          onTextChange={setBio}
        />
      </View>

      <View style={styles.hobbyStyle}>
        <Text>Enter your hobbies</Text>
        <InputBox placeholder={hobby1} text={hobby1} onTextChange={setHobby1} />
        <InputBox placeholder={hobby2} text={hobby2} onTextChange={setHobby2} />
        <InputBox placeholder={hobby3} text={hobby3} onTextChange={setHobby3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
  hobbyStyle: {
    alignItems: "center",
    marginTop: 50,
  },
  profilePictureStyle: {
    flexDirection: "row",
  },
});
export default InitiateProfileScreen;
