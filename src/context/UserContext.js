import React, { useState } from "react";
import serverApi from "../api/server";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn,setLoggedIn] = useState(0);
  const signUp = ({name,phone,gender,password}) => {
    setName(name);
    setGender(gender);
    setPassword(password);
    setPhone(phone);
    console.log(name);
    console.log(phone);
    console.log(password);
    console.log(gender);
    let signUpFunc = async () => {
      await serverApi.post('./signup', {phone,name,gender,password});
    };
    signUpFunc()
    .then((result)=>{console.log(result)})
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
      await jsonServer.post('./Userposts', {title,content});
    };
    addfunc()
    .then((result)=>{getUserPosts();})
    .catch((error) => {
      console.log("promise Error", error);
    });
  };
  return (
    <UserContext.Provider
      value={{
        signUp
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
