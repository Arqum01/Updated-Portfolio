import React from 'react'

const CompanyExperience = () => {
    const team = [
        {
            avatar: "/InfinitiDev.jpg",
            name: "Infiniti Dev",
            title: "Software Developer",
            exp: 'Dec 2023 - Present',
            desc: "I worked there as a Software Developer of Web and App where I work on the development of a project using React.js, React Native and Redux Toolkit which is fully responsive.",
        },
        {
            avatar: "/IREG-IT.jpeg",
            name: "Ireg-IT",
            title: "Frontend React Developer",
            exp: 'Sep 2023 - Oct 2023',
            desc: "I worked there as a frontend developer in IREG-IT where I spearheaded the development of a project from scratch using React.js and Custom CSS which is fully responsive.",
        },
        {
            avatar: "/Teo_logo.png",
            name: "TEO Intl.",
            title: "Trainee Software Developer",
            exp: 'Feb 2023 - July 2023',
            desc: "As a Trainee Software Developer, I spearheaded the development of a project from scratch using Next.js and Material UI, demonstrating my ability create user interfaces.",
        },
    ]
    return (
        <section className="py-14"  id='Experience'>
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Companies Experience
                    </h3>
                    <p className="text-white mt-3">
                    Developed and delivered cutting-edge solutions for these Companies.</p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-white">Experience: {item.exp}</p>
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

export default CompanyExperience