import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import MyButton from "../components/MyButton";
import InputBox from "../components/InputBox";

const RegisterScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [value, setValue] = React.useState("first");
  return (
    <View style={styles.containerStyle}>
      <Text>Welcome Onboard</Text>
      <Text>Designed for love</Text>

      <InputBox
        text={fullName}
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
      <Text>Choose your gender</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <View>
          <Text>Male</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Female</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
      <MyButton
        buttonText="Register"
        onPress={() => props.navigation.navigate("Otp")}
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
