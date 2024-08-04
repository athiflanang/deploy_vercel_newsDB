import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  const { id } = useParams();
  const [findId, setFindId] = useState([]);
  async function PopulateDetail() {
    try {
      const { data } = await axios.get(
        `https://server.athiflanang.site/pub/${id}`
      );
      setFindId(data.findArticle);
      console.log(data.findArticle);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    PopulateDetail();
  }, []);
  return (
    <>
      <div className="bg-black min-h-screen font-Playfair">
        <div className="text-6xl font-bold items-center">
          <div className="flex justify-center py-5 text-darkGold">
            Warforge Media
          </div>
          <div className="flex text-xl font-semibold justify-center py-5 text-boneWhite">
            Your latest news cycle from the Imperium of Man
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="grid grid-rows-2 px-4 justify-items-center">
            <img
              src={findId.imageUrl}
              alt=""
              className="w-3/4 flex justify-items-center rounded-md mb-10"
            />
            <div className="flex-row justify-items-center text-3xl font-bold text-boneWhite text-center">
              <p>{findId.title}</p>
              <br></br>
              <p>{findId.content}</p>
            </div>
            <Link to="/">
              <button className="btn btn-outline text-boneWhite">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
