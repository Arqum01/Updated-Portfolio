import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      href: "#Experience",
      name: "Experience",
    },
    {
      href: "#Skills",
      name: "Skills",
    },
    {
      href: "#Portfolio",
      name: "Portfolio    ",
    },
  ];
  return (
    <footer className="pt-10" id="Footer">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <p className="font-bold italic text-2xl text-white">Arqum Ahmad</p>
            <p className="max-w-md text-white">
              A Frontend React Developer skilled in creating dynamic and
              responsive web applications and Application Development.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-white duration-150">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-white font-semibold">Get in Contact</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
    <a href="mailto:arqumahmad019@gmail.com" class="font-bold italic text-xl text-white">Gmail: Arqum Ahmad</a>
    <a href="https://www.linkedin.com/in/arqum-ahmad-bb5851248/" className="font-bold italic text-xl text-white">LinkedIn: Arqum Ahmad</a>
    <a href="https://github.com/Arqum01" className="font-bold italic text-xl text-white">Github: Arqum</a>
</div>

          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center text-white">
          <p>© 2022 Arqum Ahmad. All rights reserved.</p> <br />
          <p>Developed by Arqum Ahmad, Software Developer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
