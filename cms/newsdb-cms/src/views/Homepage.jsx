import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Toastify from "toastify-js";

export default function HomePage({ url }) {
  const [findArticle, setFindArticle] = useState([]);

  async function deleteArtcle(id) {
    try {
      const response = await axios.delete(`${url}/article/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response);
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

  async function getArticle() {
    try {
      const { data } = await axios.get(`${url}/pub?sort=id`);
      setFindArticle(data.data);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
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
    }
  }
  useEffect(() => {
    getArticle();
  });
  return (
    <>
      <div className="overflow-x-auto bg-black text-boneWhite">
        <table className="table table-xs">
          <thead className="text-boneWhite">
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
              <th>Category Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {findArticle.map((article) => (
              <tr key={article.id}>
                <th>{article.id}</th>
                <td>{article.title}</td>
                <td>{article.content}</td>
                <td>{article.categoryId}</td>
                <td>
                  <div>
                    <Link
                      to={`/edit/${article.id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      <PencilSquareIcon className="size-6 text-blue-500" />
                    </Link>
                    <button
                      onClick={() => deleteArtcle(article.id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <TrashIcon className="size-6 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
