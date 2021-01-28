import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OtpScreen from "./src/screens/OtpScreen";
const navigator = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Otp: OtpScreen,
  },
  {
    initialRouteName: "Register",
    defaultNavigationOptions: {
      title: "LoveApp",
    },
  }
);

export default createAppContainer(navigator);
