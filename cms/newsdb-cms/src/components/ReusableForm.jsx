import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

export default function ReusableForm({ url, submitData, nameProp, article }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  // cara populasi data pas edit
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
      setImageUrl(article.imageUrl);
      setCategoryId(article.categoryId);
    }
  }, [article]);

  async function getCategory() {
    try {
      const { data } = await axios.get(`${url}/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategories(data.readCategory);
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
    getCategory();
  }, []);
  return (
    <>
      <form className="w-96 mx-auto mt-40">
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="floating_title"
            id="floating_title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkGold focus:outline-none focus:ring-0 focus:border-darkGold peer"
            placeholder=" "
            value={title}
          />
          <label
            htmlFor="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-darkGold peer-focus:dark:text-darkGold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            name="floating_content"
            id="floating_content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkGold focus:outline-none focus:ring-0 focus:border-darkGold peer"
            placeholder=" "
            value={content}
          />
          <label
            htmlFor="floating_content"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-darkGold peer-focus:dark:text-darkGold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Content
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setImageUrl(e.target.value)}
            type="url"
            name="imageUrl"
            id="floating_imageUrl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkGold focus:outline-none focus:ring-0 focus:border-darkGold peer"
            placeholder=" "
            value={imageUrl}
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-darkGold peer-focus:dark:text-darkGold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Url
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select
            className="select select-bordered"
            name="category"
            id="category-select"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <Link to="/">
          <button
            type="submit"
            className="btn btn-outline"
            onClick={(e) => submitData(e, title, content, imageUrl, categoryId)}
          >
            {nameProp}
          </button>
        </Link>
      </form>
    </>
  );
}
