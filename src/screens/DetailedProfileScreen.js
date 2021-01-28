import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DetailedProfileCard from "../components/DetailedProfileCard";

const img = "../../assets/";
const image1 = require(img + "road.jpg");

const DetailedProfileScreen = () => {
  const [image, setImage] = useState(image1);
  return (
    <View>
      <View style={styles.cardStyle}>
        <DetailedProfileCard backgroundImage={image1} />
      </View>
      <View style={{ marginLeft: "15%", bottom: "5%" }}>
        <Text>Deepti Jha 23</Text>
        <Text>About:</Text>
        <Text>
          I live in the sky in the blessing of the gods. only for hookups, love
          is life.
        </Text>
      </View>

      <View style={styles.hobbyStyle}>
        <Text style={styles.hobbyCardStyle}>Hello</Text>
        <Text style={styles.hobbyCardStyle}>Hello</Text>
        <Text style={styles.hobbyCardStyle}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  hobbyStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hobbyCardStyle: {
    color: "black",
    padding: 2,
    width: "25%",
    borderRadius: 10,
    backgroundColor: "pink",
    height: "100%",
    fontSize: 12,
    textAlign: "center",
  },
});
export default DetailedProfileScreen;
