import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ChangePhotosCard from "../components/ChangePhotosCard";

const img = "../../assets/";
const image1 = require(img + "forest.jpg");
const image2 = require(img + "beach.jpg");
const image3 = require(img + "mountain.jpg");
const image4 = require(img + "road.jpg");
const ChangePhotosScreen = () => {
  return (
    <View>
      <Text>My Photos</Text>
      <View style={styles.rowStyle}>
        <ChangePhotosCard backgroundImage={image1} />
        <ChangePhotosCard backgroundImage={image2} />
      </View>
      <View style={styles.rowStyle}>
        <ChangePhotosCard backgroundImage={image3} />
        <ChangePhotosCard backgroundImage={image4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    height: "35%",
    justifyContent: "space-around",
    marginTop: 70,
  },
});

export default ChangePhotosScreen;
