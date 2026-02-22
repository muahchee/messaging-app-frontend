import { App } from "./App";
import { ErrorPage } from "./ErrorPage";
import { Chatroom } from "./sections/Chatroom";
import { Contacts } from "./sections/Contacts";
import { CreateChatroom } from "./sections/CreateChatroom";
import { Home } from "./sections/Home";
import { Login } from "./sections/Login";
import { Settings } from "./sections/Settings";
import { Signup } from "./sections/Signup";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/chatroom/:chatroomId",
        element: <Chatroom />,
      },
      {
        path: "/createChatroom",
        element: <CreateChatroom />,
      },
    ],
  },
];
