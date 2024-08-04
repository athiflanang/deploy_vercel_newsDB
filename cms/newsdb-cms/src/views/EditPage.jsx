import ReusableForm from "../components/ReusableForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "toastify-js";

export default function EditPage({ url }) {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function getArticleById() {
    try {
      const { data } = await axios.get(`${url}/article/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setArticle(data.findArticle);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
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

  useEffect(() => {
    getArticleById();
  }, []);

  async function submitData(e, title, content, imageUrl, categoryId) {
    e.preventDefault();
    try {
      const dataArticle = { title, content, imageUrl, categoryId: +categoryId };
      await axios.put(`${url}/article/${id}`, dataArticle, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Success edit article",
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
        text: error.response.data.error,
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
      <ReusableForm
        url={url}
        submitData={submitData}
        article={article}
        nameProp={"Edit Product"}
      />
    </>
  );
}
