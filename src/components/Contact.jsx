import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplits = SplitText.create("#contact h2", { type: "word" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplits.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to find us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>Jl Margahayu Jaya, Bekasi Timur</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(021) - 123123123 </p>
          <p>hello@hello.com</p>
        </div>

        <div>
          <h3>Open Every Day </h3>
          {openingHours.map((time, index) => (
            <p key={index}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
