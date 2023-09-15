import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from './Homepage.jsx'
import Chat from './Chat.jsx'
import ChatProvider from './context/chatProvider.jsx'
import Chatpage from './page/chatPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
  {
    path: "/chat",
    element: <Chatpage></Chatpage>
  },
]);
 

createRoot(document.getElementById("root")).render(
    <ChatProvider>

<ChakraProvider>
   <RouterProvider router={router} />
       </ChakraProvider>
    </ChatProvider>
);



