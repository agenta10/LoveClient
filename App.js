import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OtpScreen from "./src/screens/OtpScreen";
import FeedScreen from "./src/screens/FeedScreen";
import DetailedProfileScreen from "./src/screens/DetailedProfileScreen";
import InitiateProfileScreen from "./src/screens/InitiateProfileScreen";
import AddImagesScreen from "./src/screens/AddImagesScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import ChangePhotosScreen from "./src/screens/ChangePhotosScreen";
import NearbyScreen from "./src/screens/NearbyScreen";
import { UserProvider } from "./src/context/UserContext";
const navigator = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Otp: OtpScreen,
    Feed: FeedScreen,
    DetailedProfile: DetailedProfileScreen,
    InitiateProfile: InitiateProfileScreen,
    AddImages: AddImagesScreen,
    UserProfile: UserProfileScreen,
    ChangePhotos: ChangePhotosScreen,
    Nearby: NearbyScreen,
  },
  {
    initialRouteName: "Nearby",
    defaultNavigationOptions: {
      title: "LoveApp",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
