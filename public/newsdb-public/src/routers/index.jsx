import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Homepage from "../views/HomePage";
import DetailPage from "../views/DetailPage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    loader: () => {
      return null;
    },
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
