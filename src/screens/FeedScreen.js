import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import FeedCard from "../components/FeedCard";
const img="../../assets/";
const FeedScreen = () => {
  const image1 = require(img+"forest.jpg");
  const image2 = require(img+"beach.jpg");
  const image3 = require("../../assets/beach.jpg");
  const image4 = require("../../assets/beach.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FeedCard title="Forest" backgroundImage={image1} />
        <FeedCard title="Beach" backgroundImage={image2} />
      </View>
      <View style={styles.imageContainer}>
        <FeedCard title="Forest" backgroundImage={image3} />
        <FeedCard title="Beach" backgroundImage={image4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-evenly'
  },
  imageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '30%'
  }
});
export default FeedScreen;
