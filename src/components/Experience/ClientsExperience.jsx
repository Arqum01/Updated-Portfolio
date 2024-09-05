import React from 'react'

const ClientsExperience = () => {
    const team = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "It-Experts",
            link: "https://officialitexperts.netlify.app/",
            title: "It-Experts Portfolio & Dashboard Frontend",
            desc: "As a Frontend Developer, I spearheaded the development of a project from scratch with 3 of my developer Friends using MERN Stack and also Redux toolkit for the handling of state globally, demonstrating my ability create user interfaces.",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Migual Sanchez",
            link: "https://stackfiver.netlify.app/",
            title: "STACK Dashboard",
            desc: "As a Frontend Developer, I spearheaded the development of a Dashboard project from scratch using React.js and Material UI and Rechart library for the charts, demonstrating my ability create user interfaces.",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Ethan",
            link: "https://puzzle-bub-client.netlify.app/",
            title: "Puzzle Bub 3D Website",
            desc: "As a Frontend Developer, I spearheaded the development of a project from scratch using React.js and currently working on the Project, demonstrating my ability create user interfaces.",
        },
    ]
  return (
    <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                Clients Experience
            </h3>
            <p className="text-white mt-3">
            Developed and delivered cutting-edge solutions with these Clients from all over the World.
            </p>
        </div>
        <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {
                    team.map((item, idx) => (
                        <li key={idx}>
                            <div className="w-24 h-24 mx-auto">
                                <img
                                    src={item.avatar}
                                    className="w-full h-full rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="mt-2">
                                <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                                <a href={item.link}><p className="text-indigo-600">{item.title}</p></a>
                                <p className="text-white mt-2">{item.desc}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  )
}

export default ClientsExperience
