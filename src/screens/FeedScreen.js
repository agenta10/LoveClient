import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import FeedCard from "../components/FeedCard";
import NearbyButton from "../components/NearbyButton";

const img = "../../assets/";
const image1 = require(img + "forest.jpg");
const image2 = require(img + "beach.jpg");
const image3 = require(img + "mountain.jpg");
const image4 = require(img + "road.jpg");
const imageSources = [
  [image1, image2],
  [image3, image4],
  [image1, image2],
  [image3, image4],
  [image1, image2],
  [image3, image4],
];
const li = [];

const FeedScreen = (props) => {
  for (let index = 0; index < imageSources.length; index++) {
    const element = imageSources[index];
    li.push(
      <View style={styles.imageContainer}>
        <FeedCard
          title="Forest"
          backgroundImage={element[0]}
          navigate={() => {
            props.navigation.navigate("DetailedProfile");
          }}
        />
        <FeedCard
          title="Beach"
          backgroundImage={element[1]}
          navigate={() => props.navigation.navigate("DetailedProfile")}
        />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <NearbyButton buttonText="Go to Nearby" />

      {li}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 162,
    paddingVertical: 10,
  },
});
export default FeedScreen;
