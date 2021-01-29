import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OtpScreen from "./src/screens/OtpScreen";
import FeedScreen from "./src/screens/FeedScreen";
import DetailedProfileScreen from "./src/screens/DetailedProfileScreen";
import InitiateProfileScreen from "./src/screens/InitiateProfileScreen";
import AddImagesScreen from "./src/screens/AddImagesScreen";
const navigator = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Otp: OtpScreen,
    Feed: FeedScreen,
    DetailedProfile: DetailedProfileScreen,
    InitiateProfile: InitiateProfileScreen,
    AddImages: AddImagesScreen,
  },
  {
    initialRouteName: "InitiateProfile",
    defaultNavigationOptions: {
      title: "LoveApp",
    },
  }
);

export default createAppContainer(navigator);
