/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Warning!!!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok"
        })
        //setError(error.message);
      });
  };

  return (
    <div>
        <Helmet>
                <title>Login | NexTalent</title>
            </Helmet>
      <div className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/ZLLs8DC/fitness-1.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content flex-col ">
          <div className="text-center text-white">
            <h1 className="text-5xl py-5 font-bold">Login now!</h1>

          </div>
          <div className="card flex-shrink-0  max-w-md shadow-2xl themeColor">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-white pt-2">Forgot password?</a>
                </label>
              </div>
              <div>
                <p className="text-red-500 font-bold">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#0a183b]">Login</button>
              </div>
              <p className="text-white">
                Do not have an account? Please{" "}
                <Link to="/register">
                  <button className="btn-link font-bold">Register</button>
                </Link>
              </p>
            </form>
            <div className="flex justify-center pb-5">
              <button onClick={handleGoogle} className="btn">
                <img
                  className="w-5"
                  src="https://i.ibb.co/b2CSKK1/Pik-Png-com-google-icon-png-344234.png "
                  alt=""
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;