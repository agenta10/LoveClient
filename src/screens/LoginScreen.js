import React, { useState,useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";
import UserContext from "../context/UserContext";

const LoginScreen = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(UserContext);

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
        onPress={() => {
          signIn({phone,password,nav: props.navigation});
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
export default LoginScreen;
