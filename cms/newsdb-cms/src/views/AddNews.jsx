import ReusableForm from "../components/ReusableForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function AddNews({ url }) {
  const navigate = useNavigate();

  async function submitData(e, title, content, imageUrl, categoryId) {
    e.preventDefault();
    try {
      const dataBody = { title, content, imageUrl, categoryId: +categoryId };
      const response = await axios.post(`${url}/article/add`, dataBody, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      // console.log(response);

      Toastify({
        text: "Success add new article",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();

      navigate("/");
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response,
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
    }
  }
  return (
    <>
      <div className="flex mt-5">
        <ReusableForm url={url} submitData={submitData} nameProp="Add News" />
      </div>
    </>
  );
}
