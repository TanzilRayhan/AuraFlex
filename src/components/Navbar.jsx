/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li><NavLink className="font-bold text-slate-500" to="/">Home</NavLink></li>
      <li><NavLink className="font-bold text-slate-500" to="/gallery">Gallery</NavLink></li>
      <li><NavLink className="font-bold text-slate-500" to="/trainer">Trainer</NavLink></li>
      <li><NavLink className="font-bold text-slate-500" to="/classes">Classes</NavLink></li>
      <li><NavLink className="font-bold text-slate-500" to="/dashboard">Dashboard</NavLink></li>
    </>
  )

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to="/"><img src="https://i.ibb.co/4dFqgjF/Aura-Flex-Logo.png" alt="logo" className="w-60"/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end  py-5">
        <Link to='/forum'>
            <button className="btn btn-md btn-ghost">Forum</button>
          </Link>

          {
            user?.email ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" btn  btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user.displayName} />
                 
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow-xl bg-base-100 rounded-box w-52">
                <li>
                  <button className="btn btn-sm normal-case btn-ghost">{user.displayName}</button>
                </li> 
                <li>
                  <button className="btn btn-sm normal-case btn-ghost">{user.email}</button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost"
                    onClick={logOut}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                <button className="btn btn-md btn-outline">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
