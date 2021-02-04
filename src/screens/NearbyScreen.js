import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";

import NearbyName from "../components/NearbyName";
import Slider from "@react-native-community/slider";
const img = "../../assets/";
const image1 = require(img + "forest.jpg");
const image2 = require(img + "beach.jpg");
const image3 = require(img + "mountain.jpg");
const image4 = require(img + "road.jpg");
const imageSources = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
];

const NearbyScreen = (props) => {
  const [sliderValue, setSliderValue] = useState(0);
  const left = (sliderValue * (300 - 60)) / 100 - 15;
  return (
    <>
      <View>
        <Text>Select Distance</Text>
        <Text style={{ width: 70, textAlign: "center", left: left }}>
          {Math.floor(sliderValue)}
        </Text>
        <Slider
          maximumValue={100}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
      </View>
      <FlatList
        data={imageSources}
        renderItem={({ item }) => {
          return <NearbyName nameAndAgeText="Akhshita Singh 23" image={item} />;
        }}
        keyExtractor={(item) => String(Math.floor(Math.random() * 100000000))}
        //extraData={selectedId}
      />
    </>
  );
};

const styles = StyleSheet.create({});
export default NearbyScreen;
