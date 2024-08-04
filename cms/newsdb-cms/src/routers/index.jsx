import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/Homepage";
import EditPage from "../views/EditPage";
import CategoryPage from "../views/CategoryPage";
import AddUser from "../views/AddUser";
import AddNews from "../views/AddNews";
import Login from "../views/login";
import Toastify from "toastify-js";

const url = "https://server.athiflanang.site";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login url={url} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You have already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please sign in first",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage url={url} />,
      },
      {
        path: "/add",
        element: <AddNews url={url} />,
      },
      {
        path: "/edit/:id",
        element: <EditPage url={url} />,
      },
      {
        path: "/category",
        element: <CategoryPage url={url} />,
      },
      {
        path: "/addUser",
        element: <AddUser url={url} />,
      },
    ],
  },
]);

export default router;
