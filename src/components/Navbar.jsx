/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error));
  };

  const navLinks = (
    <>
      <li><NavLink className="font-bold text-slate-800" to="/">Home</NavLink></li>
      <li><NavLink className="font-bold text-slate-800" to="/gallery">Gallery</NavLink></li>
      <li><NavLink className="font-bold text-slate-800" to="/trainer">Trainers</NavLink></li>
      <li><NavLink className="font-bold text-slate-800" to="/classes">Classes</NavLink></li>
      <li><NavLink className="font-bold text-slate-800" to="/dashboard">Dashboard</NavLink></li>
    </>
  )

  return (
    <div className="relative bg-slate-300">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="drawer lg:hidden z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
            </div>
            <div className="drawer-side ">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul tabIndex={0} className="menu p-4 w-80 min-h-full  bg-slate-300 text-base-content">
              {navLinks}
            </ul>
            </div>
          </div>
          <Link to="/"><img src="https://i.ibb.co/4dFqgjF/Aura-Flex-Logo.png" alt="logo" className="lg:w-60" /></Link>
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
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow-xl bg-base-100 rounded-box w-80">
                <li>
                  <button className="btn btn-sm normal-case btn-ghost text-lg font-bold">{user.displayName}</button>
                </li>
                <li>
                  <button className="btn btn-sm normal-case btn-ghost">{user.email}</button>
                </li>
                <li>
                  <button className="btn btn-sm btn-outline"
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
