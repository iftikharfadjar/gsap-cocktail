import React from "react";
import { navLinks } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navtween = gsap.timeline({
      scrolltrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navtween.fromTo(
      "nav",
      { backgroundcolor: "transparent" },
      {
        backgroundcolor: "#00000050",
        backgroundfilter: "blur(10px)",
        duration: 1,
        ease: "power1.inout",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" classname="flex items-center gap-2">
          <img src="/images/logo.png" alt="velvet pour logo" />
          <p>velvet pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
