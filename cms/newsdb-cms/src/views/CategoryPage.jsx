import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

export default function categoryPage({ url }) {
  const [category, setCategory] = useState([]);

  async function getCategory() {
    try {
      const { data } = await axios.get(`${url}/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setCategory(data.readCategory);
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
    getCategory();
  });

  return (
    <>
      <div className="overflow-x-auto bg-black text-boneWhite h-screen">
        <table className="table table-lg">
          <thead className="text-boneWhite">
            <tr>
              <th>No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {category.map((c) => (
              <tr key={c.id}>
                <th>{c.id}</th>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-items-center justify-center mt-10">
          <Link to="/">
            <button className="btn btn-outline text-boneWhite">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
