import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FeedCard from "../components/FeedCard";
const FeedScreen = () => {
  return (
    <View>
      <FeedCard
        title="Forest"
        backgroundImageSource={require("../../assets/forest.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default FeedScreen;
