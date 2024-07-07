import React from "react";

function HeroSection() {
  return (
    <>
        <section className="mt-24 lg:mt-48 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex lg:gap-20 md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              Arqum Ahmad
              <span className="text-indigo-400"> Frontend React Developer</span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            I'm Arqum Ahmad, a Frontend React Developer skilled in creating dynamic and responsive web applications and Application Development. I specialize in using React to build seamless user interfaces with clean and efficient code.
            </p>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-96 mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
        </section>
    </>
  );
}

export default HeroSection;
