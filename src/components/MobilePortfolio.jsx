

const MobilePortfolio = () => {
    const Projects = [
        {
          Image: "/Tarteel.jpeg",
          name: "Tarteel AI App",
        },
        {
          Image: "/MapTracking.jpeg",
          name: "Maps Tracking APP",
        },
        {
          Image: "/RC.jpeg",
          name: "Runners Connect Fitness App",
        }
      ];
  return (
    <>
      <section id="Portfolio">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl dark:text-white">
          Mobile Apps Portfolio
        </h1>

        <p className="mt-4 text-center text-white">
          Unleashing my expertise through a diverse skill set of Mobile App's Development.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default MobilePortfolio
