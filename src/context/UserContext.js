import React, { useState } from "react";
import serverApi from "../api/server";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(0);

  const signUp = ({ name, phone, gender, password, nav }) => {
    setName(name);
    setGender(gender);
    setPassword(password);
    setPhone(phone);
    let signUpFunc = async () => {
      const response = await serverApi.post("./signup", {
        phone,
        name,
        gender,
        password,
      });
      console.log(response.data);
      nav.navigate("Otp");
    };
    signUpFunc()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("promise Error", error);
      });
  };

  const verifyOtp = ({ otp, nav }) => {
    let verifyOtpFunc = async () => {
      const response = await serverApi.post("./otp", { otp, phone });
      console.log(response.data);
      nav.navigate("Login");
    };
    verifyOtpFunc()
      .then((result) => {})
      .catch((error) => {
        console.log("promise Error", error);
      });
  };

  const signIn = ({ phone, password, nav }) => {
    let signInFunc = async () => {
      const response = await serverApi.post("./signIn", { phone, password });
      setToken(response.data.token);
      console.log(response.data.token);
      nav.navigate("Feed");
    };
    signInFunc()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("promise Error", error);
      });
  };

  const getUserPosts = () => {
    let getfunc = async () => {
      const response = await jsonServer.get("/Userposts");
      setUserPosts(response.data);
    };
    getfunc()
      .then((result) => {})
      .catch((error) => {
        console.log("promise Error", error);
      })
      .finally(() => {});
  };
  const addUserPost = (title, content) => {
    let addfunc = async () => {
      await jsonServer.post("./Userposts", { title, content });
    };
    addfunc()
      .then((result) => {
        getUserPosts();
      })
      .catch((error) => {
        console.log("promise Error", error);
      });
  };
  return (
    <UserContext.Provider
      value={{
        signUp,
        verifyOtp,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
