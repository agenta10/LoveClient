import React from "react";
import { View, Text, StyleSheet } from "react-native";
const FeedCard = (props) => {
  return (
    <View style={{ backgroundImage: props.backgroundImageSource }}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default FeedCard;
