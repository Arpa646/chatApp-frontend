import { Box } from "@chakra-ui/layout";
import { useContext, useState } from "react";
// import Chatbox from "../components/Chatbox";
//import MyChats from "../components/MyChats";
import SideDrawer from "../componant/miscellaneous/SideDrawer";
import Chatbox from "../componant/Chatbox";
import MyChats from "../componant/MyChats";
import { ChatContext } from "../context/chatProvider";


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = useContext(ChatContext);

  return (
    <div style={{ width: "100%" }}>
    {user && <SideDrawer />}
    <Box
      d="flex"
      className="display"
      justifyContent="space-between"
      w="100%"
      h="91.5vh"
      p="10px"
    >
      {user && <MyChats fetchAgain={fetchAgain} />}
      {user && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
    
    </Box>
  </div>
  );
};

export default Chatpage;