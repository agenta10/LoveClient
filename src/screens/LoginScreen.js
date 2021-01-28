import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";

const LoginScreen = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.containerStyle}>
      <Text>Login Page</Text>
      <Text>Designed for love</Text>

      <InputBox text={phone} onTextChange={setPhone} placeholder="Phone" />
      <InputBox
        text={password}
        onTextChange={setPassword}
        placeholder="Password"
      />

      <MyButton
        buttonText="Login"
        onPress={() => props.navigation.navigate("Feed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
});
export default LoginScreen;
