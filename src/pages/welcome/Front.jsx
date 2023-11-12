import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import Discover from "../../components/WelcomeComponents/Discover";
import GLOBE from "vanta/src/vanta.globe";
import Footer from "../../layout/Footer/Footer";
import ConnectCommunity from "../../components/WelcomeComponents/ConnectCommunity";

const Front = () => {
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x1b205f,
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh;
  }, []);

  return (
    <>
      <div id="vanta">
        <main className="hero">
          <div className="container">
            <div className="welcome-inner">
              <div className="make-pin">
                <h1 className="title" data-aos="fade-up">
                  Mapped
                </h1>
                <p className="subtitle" data-aos="fade-up">
                  Explore, Share, and Connect with Nature Your Personal Map
                  Journal
                </p>
                <button className="btn">
                  <a href="/signup">Make a pin</a>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Discover />


      <ConnectCommunity />

      <Footer />
    </>
  );
};

export default Front;
