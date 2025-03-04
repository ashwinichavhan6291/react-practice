import React from "react";

function Header({ setShowSignup, setShowLogin, showLogin, showSignup }) {
  return (
    <>
      <div
        className="navbar bg-neutral text-neutral-content"
        style={{ position: "fixed", zIndex: "1" }}
      >
        <button className=" btn btn-ghost text-xl">📜 Posts</button>

        <div className="listContainer flex justify-between items-center  list-none ml-auto">
          <button
            className=" btn m-1 rounded-badge mr-10"
            onClick={() => setShowLogin(!showLogin)}
          >
            Log In
          </button>

          <button
            className="btn m-1 rounded-badge mr-10"
            onClick={() => setShowSignup(!showSignup)}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
