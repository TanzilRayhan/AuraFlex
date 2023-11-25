/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="max-w-xl max-h-fit mx-auto">
        <h1 className="font-bold text-5xl text-center pt-10">Page Not Found</h1>
        <div className=" my-5 flex justify-center items-center">
        <Link to="/"><button className="btn btn-ghost btn-outline font-bold text-xl text-center">Back to home</button></Link>
        </div>
        <img className="flex justify-center items-center" src="https://i.ibb.co/txLM9J7/Error-404.jpg" alt="error 404"  />
      </div>
    );
  };
  
  export default ErrorPage;
  