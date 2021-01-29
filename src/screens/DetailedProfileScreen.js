import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DetailedProfileCard from "../components/DetailedProfileCard";

const img = "../../assets/";
const image1 = require(img + "road.jpg");
const image2 = require(img + "mountain.jpg");
const image3 = require(img + "beach.jpg");
const image4 = require(img + "forest.jpg");

const imgList = [image1, image2, image3, image4];
const n = imgList.length;

const DetailedProfileScreen = () => {
  const [imageIndex, setImageInd] = useState(0);
  const image = imgList[imageIndex];
  return (
    <View>
      <View style={styles.cardStyle}>
        <DetailedProfileCard
          backgroundImage={image}
          onLeftPress={() => {
            setImageInd((imageIndex + 1) % n);
          }}
          onRightPress={() => {
            setImageInd((imageIndex - 1 + n) % n);
          }}
        />
      </View>
      <View style={{ marginLeft: "13%", bottom: "5%" }}>
        <Text style={{ fontWeight: "bold" }}>Deepti Jha 23</Text>
        <Text style={{ fontFamily: "sans-serif-medium" }}>About:</Text>
        <Text>
          I live in the sky in the blessing of the gods. only for hookups, love
          is life.
        </Text>
      </View>

      <View style={styles.hobbyStyle}>
        <Text style={styles.hobbyCardStyle}>Swimming</Text>
        <Text style={styles.hobbyCardStyle}>Singing</Text>
        <Text style={styles.hobbyCardStyle}>Dancing</Text>
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
