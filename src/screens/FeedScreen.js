import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
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
  return (
    <View>
      <NearbyButton buttonText="Go to Nearby" />
      <FlatList
        data={imageSources}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <FeedCard
                title="Forest"
                backgroundImage={item[0]}
                navigate={() => {
                  props.navigation.navigate("DetailedProfile");
                }}
              />
              <FeedCard
                title="Beach"
                backgroundImage={item[1]}
                navigate={() => props.navigation.navigate("DetailedProfile")}
              />
            </View>
          );
        }}
        keyExtractor={(item) => String(Math.floor(Math.random() * 1000000))}
        //extraData={selectedId}
      />
      {/* {li} */}
      </View>
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
