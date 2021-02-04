import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";
import UserContext from "../context/UserContext";
const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const { verifyOtp } = useContext(UserContext);
  return (
    <View style={styles.containerStyle}>
      <Text>Enter your OTP</Text>

      <InputBox text={otp} onTextChange={setOtp} placeholder="Enter your OTP" />

      <MyButton
        buttonText="Confirm"
        onPress={() => {
          verifyOtp({otp,nav:navigation});
        }}
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
