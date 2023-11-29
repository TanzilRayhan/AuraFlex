import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddClass = () => {

    const handleAddClass = (e) => {
        e.preventDefault();

        const form = e.target;

        const classTitle = form.classTitle.value;
        const classCover = form.classCover.value;
        const classHour = form.classHour.value;
        const category = form.category.value;

        

        const classInfo = {
            classTitle, classCover, classHour, category
        };
        console.log(classInfo);

        //send data to the server
        fetch("https://aura-flex-server.vercel.app/class", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(classInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congrats!!!",
                        text: "Class added successfully !!!",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Add Class | AuraFlex</title>
            </Helmet>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/9Nr53PF/Fitness-Classes.jpg)",
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
                                Add Class
                            </h1>
                        </div>
                        <div className="w-full p-10 rounded-xl shadow-2xl themeColor mb-10">
                            <form onSubmit={handleAddClass}>

                                <div className="lg:flex gap-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Class Title
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="classTitle"
                                            placeholder="Class Title"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Class Cover
                                            </span>
                                        </label>
                                        <input
                                            type="url"
                                            name="classCover"
                                            placeholder="Enter Class Cover URL"
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
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl font-bold text-white">
                                                Class Hour
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="classHour"
                                            placeholder="Enter Class hour"
                                            className="input input-bordered text-slate-600"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-control  items-center mt-5">
                                    <button className="btn w-2/3 btn-primary bg-[#0a183b]">
                                        Add Class
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

export default AddClass;
