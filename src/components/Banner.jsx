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
            <div className="max-w-4xl">
              <div className=" px-5 lg:px-0">
                <h1 className="text-4xl lg:text-6xl text-center font-bold py-5 text-white">
                  Welcome To AuraFlex
                </h1>
                <p className="text-xs lg:text-xl font-semibold pt-5 pb-10 text-grey-300">
                At the core of NexTalent is a vision of a seamless, user-friendly platform that bridges the gap between talent and opportunity. We believe in simplifying the talent acquisition process, making it efficient, transparent, and rewarding for both employers and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  