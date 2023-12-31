import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div>
      <div
        className="hero lg:min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/7nQwj3t/fitness-7.jpg)"
        }}
      >
        <div className="hero-overlay brightness-50"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-7xl mx-auto ">
            <div className="px-5 lg:px-0" >
              <div data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img src="https://i.ibb.co/QjMqjPX/Aura-Flex-Logo-white.png" alt="logo" className="lg:w-96 py-5" />
                <h1 className="text-xl lg:text-4xl font-semibold py-5 text-white">
                  Fitness Tracker/Lifestyle Mentor
                </h1>
                <div>
                  <p className="w-2/3 lg:w-1/3 text-xs lg:text-lg font-semibold pt-5 pb-10 text-grey-400">
                    AuraFlex is a cutting-edge fitness tracker website designed to elevate your fitness journey. With a sleek and intuitive interface, AuraFlex empowers users to monitor and optimize their health and wellness. Track your workouts, analyze your performance, and set personalized fitness goals tailored to your unique needs.
                  </p>
                </div>
              </div>
              <Link to="/classes"><button className="btn btn-outline bg-white btn-ghost my-10">Explore Our Classes</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
