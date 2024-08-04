// import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function Card({ article }) {
  const navigate = useNavigate();
  async function handleId(id) {
    navigate(`detail/${id}`);
  }
  return (
    <>
      <div className="card bg-gunmetalGrey w-5/6 shadow-darkGold shadow-md transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-100 transition ease-in-out duration-300">
        <figure>
          <img src={article.imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-boneWhite">
            {article.title}
            <div className="badge badge-default">NEW</div>
          </h2>
          <p className="text-boneWhite">{article.content}</p>
          <div className="card-actions justify-end">
            <button
              className="btn glass text-boneWhite hover:text-black"
              onClick={() => handleId(article.id)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
