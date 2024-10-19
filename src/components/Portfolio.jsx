
const Portfolio = () => {
  const Projects = [
    {
      Image: "/StackWeb.png",
      name: "Stack Dashboard",
      Link: "https://stackfiver.netlify.app/",
    },
    {
      Image: "/TarteelWeb.png",
      name: "Tarteel AI",
      Link: "https://www.tarteel.ai/",
    },
    {
      Image: "/ceolution.png",
      name: "Ceolution",
      Link: "https://www.ceolution.ai",
    },
    {
      Image: "/Devtrox.png",
      name: "Devtrox",
      Link: "https://devtrox.com/",
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
        Link: "https://puzzle-bub-client.netlify.app/"
      },
  ];
  return (
    <section id="Portfolio">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl dark:text-white">
          Website Portfolio
        </h1>

        <p className="mt-4 text-center text-white">
          Unleashing my expertise through a diverse skill set of Web Development.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
          {Projects.map((item, idx) => (
            <div key={idx}>
              <img
                className="object-contain rounded-lg h-100"
                src={item.Image}
                alt=""
              />
              <h2 className="mt-4 mb-4 text-xl font-semibold text-white capitalize">
                {item.name}
              </h2>
              <a href={item.Link}>
                <button className="SkillsBtn">Live Demo</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
