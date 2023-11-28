import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const BeTrainer = () => {
    const { user } = useContext(AuthContext);

    const handleAddTrainer = (e) => {
        e.preventDefault();

        const form = e.target;

        const trainerName = form.trainerName.value;
        const trainerEmail = form.trainerEmail.value;
        const trainerAge = form.trainerAge.value;
        const trainerImage = form.trainerImage.value;
        const weekTime = form.weekTime.value;
        const dayTime = form.dayTime.value;
        const experience = form.experience.value;
        

        const trainerInfo = {
            trainerName, trainerEmail,trainerAge,trainerImage, weekTime, dayTime, experience
        };
        console.log(trainerInfo);

        //send data to the server
        fetch("https://aura-flex-server.vercel.app/trainer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trainerInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congrats!!!",
                        text: "Trainer added successfully !!!",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Be a Trainer | AuraFlex</title>
            </Helmet>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/rmQvz8S/fitness-1.png)",
                }}
            >
                <div className="hero-overlay ">
                    <div className="flex-col max-w-4xl mx-auto hero-content text-neutral-content">
                        <div className="px-5 lg:px-0">
                            <img
                                src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png"
                                alt="logo"
                                className="lg:w-96 py-5"
                            />
                            <h1 className=" text-3xl lg:text-7xl font-extrabold py-5 text-white">
                                Be a Trainer
                            </h1>
                        </div>
                        <div className="w-full p-10 rounded-xl shadow-2xl themeColor mb-10">
                            <form onSubmit={handleAddTrainer}>
                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Full Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="trainerName"
                                            placeholder="Enter Full Name"
                                            className="input input-bordered text-slate-600"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            name="trainerEmail"
                                            placeholder="Enter email"
                                            className="input input-bordered text-slate-600"
                                            defaultValue={user?.email}
                                            required
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Age
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="trainerAge"
                                            placeholder="Enter Age"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Profile Image
                                            </span>
                                        </label>
                                        <input
                                            type="url"
                                            name="trainerImage"
                                            placeholder="Enter Image Url"
                                            className="input input-bordered text-slate-600"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Available in a week
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="weekTime"
                                            placeholder="Enter Available time in a week"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Available in a day
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="dayTime"
                                            placeholder="Enter Available time in a day"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Years of Experience
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="experience"
                                            placeholder="Enter Years of Experience"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Skills
                                            </span>
                                        </label>
                                        <div className="flex lg:flex-row flex-col lg:ml-4 gap-3 my-3">
                                            <span><input type="Checkbox" name="patience" value="skill"  /> Patience</span>
                                            <span><input type="Checkbox" name="communication" value="skill" /> Communication</span>
                                            <span><input type="Checkbox" name="flexible " value="skill" /> Flexible </span>
                                        </div>
                                    </div>

                                </div>
                                <label className="label">
                                    <a href="" className="label-text-alt link link-hover font-bold text-white pt-2">
                                        Forgot password?
                                    </a>
                                </label>

                                <div className="form-control  items-center mt-3">
                                    <button className="btn w-2/3 btn-primary bg-[#0a183b]">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeTrainer;
