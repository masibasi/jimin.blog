import React from "react";
import confetti from "canvas-confetti";
import HomeHeader from "../components/HomeHeader";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const fire = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    var end = Date.now() + 1 * 1000;

    var colors = ["#bb0000", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="Home">
      <HomeHeader onFire={fire} />
      <SocialLinks />
    </div>
  );
};

export default Home;
