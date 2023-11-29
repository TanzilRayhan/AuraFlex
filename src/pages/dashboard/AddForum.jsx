import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddForum = () => {


    const handleAddTrainer = (e) => {
        e.preventDefault();

        const form = e.target;

        const trainerName = form.trainerName.value;
        const trainerEmail = form.trainerEmail.value;
        const trainerAge = form.trainerAge.value;
  


        const trainerInfo = {
            trainerName, trainerEmail, trainerAge, 
        };
        console.log(trainerInfo);

        //send data to the server
        fetch("http://localhost:5001/trainer", {
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
                    backgroundImage: "url(https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                                Add Forum Post
                            </h1>
                        </div>
                        <div className="w-full p-10 rounded-xl shadow-2xl themeColor mb-10">
                            <form onSubmit={handleAddTrainer}>
                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Post Title
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="postTitle"
                                            placeholder="Enter Post Title"
                                            className="input input-bordered text-slate-600"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Category
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            placeholder="Enter Category"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-white">
                                            Description
                                        </span>
                                    </label>
                                    <textarea type="textarea"
                                        name="description"
                                        placeholder="Enter Post description"
                                        className="input input-bordered p-3 w-full h-44 text-slate-600"
                                        required
                                        autoComplete="off">
                                    </textarea>


                                </div>
                                <div className="form-control items-center mt-3">
                                    <button className="btn w-2/3 mt-5  btn-primary bg-[#0a183b]">
                                        Post
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

export default AddForum;
