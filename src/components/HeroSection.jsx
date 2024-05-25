import React from "react";

function HeroSection() {
  return (
    <>
      <div className="bg-gray-900">
        <section className="mt-48 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              Arqum Ahmad
              <span className="text-indigo-400"> Frontend React Developer</span>
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            I'm Arqum Ahmad, a Frontend React Developer skilled in creating dynamic and responsive web applications and Application Development. I specialize in using React to build seamless user interfaces with clean and efficient code.
            </p>
            <div className="pt-2 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <button class="contactButton">
                Contact
                <div class="iconButton">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
