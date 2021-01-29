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
  [image3, image4],
  [image1, image2],
  [image3, image4],
];
const FeedScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <NearbyButton buttonText="Go to Nearby" />
      {imageSources.map((prop, key) => {
        return (
          <View style={styles.imageContainer}>
            <FeedCard title="Forest" backgroundImage={prop[0]} key={2 * key} navigate={()=>{props.navigation.navigate("DetailedProfile")}}/>
            <FeedCard
              title="Beach"
              backgroundImage={prop[1]}
              key={2 * key + 1}
              navigate={() => props.navigation.navigate("DetailedProfile")}
            />
          </View>
        );
      })}
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
