import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user); // Debugging: Check the user object

  const list = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/update">Update Profile</NavLink></li>
      {user && <li><NavLink to="/user_profile">User Profile</NavLink></li>}
      <li><NavLink to="/error">error</NavLink></li>
    </>
  );

  return (
    <div className="font-body ">
      <div className="navbar bg-slate-800 text-white h-20 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {list}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-3xl text-s">Bikrampur Market</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {list}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          {user && user.photoURL ? (
            <div className="mr-4 tooltip tooltip-bottom" data-tip={user.displayName}>
              <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
            </div>
          ) : (
            <div className="mr-4 tooltip tooltip-bottom" data-tip="Guest">
              <img src="https://via.placeholder.com/40" alt="Default Avatar" className="w-8 h-8 rounded-full" />
            </div>
          )}
          {user ? (
            <button onClick={logOut} className="bg-red-500 text-white px-3 py-1 rounded">Sign Out</button>
          ) : (
            <div className="bg-green-700 text-white">
              <NavLink to="/login" className="btn">Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
