/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const image = form.get("image");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, image, email, password);

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            setError("Minimum six characters, at least one letter and one number");
            Swal.fire({
                title: "Error!!!",
                text: "Minimum six characters, at least one letter and one number",
                icon: "error",
                confirmButtonText: "Ok"
            })
        }


        createUser(email, password,)
            .then((result) => {
                handleUpdateProfile(name, image)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if(res.insertedId) {
                                console.log("User added to the database");
                            }
                        })
                        Swal.fire({ 
                            title: "Success!!",
                            text: "User Created Successfully",
                            icon: "success",
                            confirmButtonText: "Ok"
                        })
                        console.log(result.user);
                        navigate(location?.state ? location.state : "/");
                    })

            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Register | NexTalent</title>
            </Helmet>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/ZLLs8DC/fitness-1.jpg)",
                }}>
                <div className="hero-overlay brightness-50"></div>
                <div className="hero-content flex-col ">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold py-5">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 max-w-lg mb-10 shadow-2xl themeColor">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Full Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter name" className="input input-bordered" required autoComplete="off"  />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Enter image url" className="input input-bordered" required autoComplete="off" />
                                </div>
                            </div>

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
                                <p className="text-red-500 font-bold"></p>
                                <div>
                                    <p className="text-red-500 font-bold">{error}</p>
                                </div>
                            </div>
                            <div className="form-control my-3">
                                <button className="btn btn-primary bg-[#0a183b]">Register</button>
                            </div>
                            <p className="text-white text-center">
                                Already Have an Account? Please{" "}
                                <Link to="/login">
                                    <button className="btn-link font-bold">Login</button>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;