import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { user, logoutUsre } = useContext(AuthContext);

  // handleLogout.
  const handleLogout = () => {
    logoutUsre();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/carrer">Carrer</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-10 mr-5" src={avatar} alt="" />
        {user ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md font-semibold bg-[#403F3F] text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="px-4 py-2 rounded-md font-semibold bg-[#403F3F] text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
