import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";

import { useContext } from "react";
import { ChatContext } from "../context/chatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useContext(ChatContext);

  return (
    <Box
    display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
    alignItems="center"
    flexDirection="column"
    padding={3}
    backgroundColor="white"
    width={{ base: "100%", md: "68%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
    <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
  </Box>
  );
};

export default Chatbox;