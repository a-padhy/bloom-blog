import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: "include" })
      .then((response) => response.json())
      .then((userInfo) => setUserInfo(userInfo));
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };
  const username = userInfo?.username;
  return (
    <header>
      <Link to="/" className="logo">
        BloomBlog
      </Link>
      <nav>
        {username && (
          <>
            <div>{`Hello, ${username}`}</div>
            <Link to="/create" className="create">
              Create New Post
            </Link>
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
