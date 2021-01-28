import React from "react";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
const FeedCard = (props) => {
  
  return (
    <View style={styles.contentStyle}>
       <ImageBackground
        style={styles.backgroundImageStyle}
        source={props.backgroundImage}>
        <Text style={styles.textStlye}>{props.title}</Text>
        </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  contentStyle:{
    height: '100%',
    width: '40%',
  },
  backgroundImageStyle:{
    width: '100%', 
    height: '100%',
  },
  textStlye:{
  marginTop: '50%'
  }
});



export default FeedCard;
