import React from "react";

const Portfolio = () => {
  const Projects = [
    {
      Image: "/StackWeb.png",
      name: "Stack Dashboard",
      Link: "https://stackfiver.netlify.app/",
    },
    {
      Image: "/TarteelWeb.png",
      name: "Tarteel",
      Link: "https://www.tarteel.ai/",
    },
    {
      Image: "/AutopartifyWeb.png",
      name: "AutoPartify",
      Link: "https://autopartify.com/",
    },
    {
      Image: "/ITEXperts.png",
      name: "IT-Experts",
      Link: "https://officialitexperts.netlify.app/",
    },
    {
      Image: "/Ecommerce.png",
      name: "Shop Chameleon",
      Link: "https://shopchameleon.netlify.app/",
    },
    {
      Image: "/MSE.png",
      name: "Movie Search Engine",
      Link: "https://movie-search-engine-arqum.vercel.app/",
    },
    {
      Image: "/TODO.png",
      name: "Todo Web App",
      Link: "https://arqum-todo-app.netlify.app/",
    },
    {
        Image: "PuzzleBub.png",
        name: "Puzzle Bub 3D",
        Link: "https://puzzle-bub.netlify.app/"
      },
  ];
  return (
    <section id="Portfolio">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-white capitalize lg:text-3xl dark:text-white">
          Portfolio
        </h1>

        <p class="mt-4 text-center text-white">
          Unleashing my expertise through a diverse skills set
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
          {Projects.map((item, idx) => (
            <div key={idx}>
              <img
                class="object-contain rounded-lg h-100"
                src={item.Image}
                alt=""
              />
              <h2 class="mt-4 mb-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                {item.name}
              </h2>
              <a href={item.Link}>
                <button className="SkillsBtn">Website OVERVIEW</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
