import React, { useState, useContext } from "react";
import serverApi from "../api/server";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";
import UserContext from "../context/UserContext";
const RegisterScreen = (props) => {
  const [name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = React.useState("");

  const { signUp } = useContext(UserContext);

  return (
    <View style={styles.containerStyle}>
      <Text>Welcome Onboard</Text>
      <Text>Designed for love</Text>

      <InputBox
        text={name}
        onTextChange={setFullName}
        placeholder="Full Name"
      />
      <InputBox text={phone} onTextChange={setPhone} placeholder="Phone" />
      <InputBox
        text={password}
        onTextChange={setPassword}
        placeholder="Password"
      />
      <InputBox
        text={confirmPassword}
        onTextChange={setConfirmPassword}
        placeholder="Confirm password"
      />
      <InputBox text={gender} onTextChange={setGender} placeholder="Gender" />

      <MyButton
        buttonText="Register"
        onPress={() => {
          signUp({ phone, name, password, gender ,nav : props.navigation });
        }}
      />
      <MyButton
        buttonText="Or Login"
        onPress={() => {
           props.navigation.navigate('Login');
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
export default RegisterScreen;
