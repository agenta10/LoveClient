import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";

const OtpScreen = (props) => {
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.containerStyle}>
      <Text>Enter your OTP</Text>

      <InputBox text={otp} onTextChange={setOtp} placeholder="Enter your OTP" />

      <MyButton
        buttonText="Confirm"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
});
export default OtpScreen;
