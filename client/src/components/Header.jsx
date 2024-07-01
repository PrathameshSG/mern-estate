import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = () => {};
  //   const { currentUser } = useSelector((state) => state.user);
  const currentUser = false;
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">prathamesh</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          {currentUser ? (
            <Link to="/profile">
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={
                  "data:image/jpeg;base64,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"
                }
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="/sign-in">
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
