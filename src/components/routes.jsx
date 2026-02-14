import { App } from "./App";
import { ErrorPage } from "./ErrorPage";
import { Home } from "./sections/Home";

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
    ],
  },
];
