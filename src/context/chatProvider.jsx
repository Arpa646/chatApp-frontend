import React, { createContext, useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
//create cotext
export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

//   const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log(userInfo)

   // if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user)

  return (
    <ChatContext.Provider
      value={{
        user,setUser,setSelectedChat,selectedChat,chats, setChats
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {

    //to use all dtaa over on application
  return useContext(ChatContext);
};

export default ChatProvider;