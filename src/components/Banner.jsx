import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div>
        <div
          className="hero lg:min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/7nQwj3t/fitness-7.jpg)",
          }}
        >
          <div className="hero-overlay brightness-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-5xl mx-auto">
              <div className="px-5 lg:px-0">
                <h1 className="text-4xl lg:text-6xl text-center font-bold py-5 text-white">
                  Welcome To AuraFlex
                </h1>
                <p className="text-xs lg:text-base font-semibold pt-5 pb-10 text-grey-400">
                AuraFlex is a cutting-edge fitness tracker website designed to elevate your fitness journey. With a sleek and intuitive interface, AuraFlex empowers users to monitor and optimize their health and wellness. Track your workouts, analyze your performance, and set personalized fitness goals tailored to your unique needs. The website seamlessly integrates with a variety of fitness devices, providing real-time data and insights to keep you motivated and on track. Whether you are a seasoned athlete or just starting your fitness adventure, AuraFlex is your dedicated companion on the path to a healthier, more active lifestyle. Join the AuraFlex community and experience the next level of fitness tracking and personal well-being.
                </p>
                <Link to="/classes"><button className="btn btn-outline bg-white btn-ghost">Explore Our Classes</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  