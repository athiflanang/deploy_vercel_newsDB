import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-darkGold lg-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-boneWhite rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <li>
                  <a href="">Home</a>
                </li>
              </Link>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
          <a
            href=""
            className="btn btn-ghost text-xl text-boneWhite hover:text-darkGold"
          >
            Warforge Media
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <a
                href=""
                className="font-semibold text-boneWhite hover:bg-darkGold hover:text-black"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="btn"></a>
        </div>
      </div>
    </>
  );
}
