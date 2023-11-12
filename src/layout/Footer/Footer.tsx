import style from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import SubscribeInsider from "./SubscribeInsider";

import instagram from "../../assets/svg-icons/instagram.svg";
import facebook from "../../assets/svg-icons/facebook.svg";
import twitter from "../../assets/svg-icons/twitter.svg";
import tiktok from "../../assets/svg-icons/tik-tok.svg";
import youtube from "../../assets/svg-icons/youtube.svg";

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <div className="container">
        <div className={style.footer}>
          <div className={style.left}>
            <a href="#">
              <img src={logo} className={style.logo} alt="mapped" />
            </a>
            <h3 className={style.subtitle}>Subscribe to The Mapped Insider</h3>
            <p className={style.subtext}>
              Discover tips, technical guides, and best practices in our monthly
              newsletter for developers.
            </p>
            <SubscribeInsider />
          </div>
          <div className={style.info}>
            <h1 className={style.title}>Product</h1>
            <a href="#" className={style.text}>
              Features
            </a>
            <a href="#" className={style.text}>
              Security
            </a>
            <a href="#" className={style.text}>
              Team
            </a>
            <a href="#" className={style.text}>
              Pricing
            </a>
            <a href="#" className={style.text}>
              Resources
            </a>
            <a href="#" className={style.text}>
              Roadmap
            </a>
            <a href="#" className={style.text}>
              Compare Mapped
            </a>
          </div>
          <div className={style.info}>
            <h1 className={style.title}>Platform</h1>
            <a href="#" className={style.text}>
              Developer API
            </a>
            <a href="#" className={style.text}>
              Partners
            </a>
            <a href="#" className={style.text}>
              Electron
            </a>
            <a href="#" className={style.text}>
              Desktop
            </a>
          </div>
          <div className={style.info}>
            <h1 className={style.title}>Support</h1>
            <a href="#" className={style.text}>
              Docs
            </a>
            <a href="#" className={style.text}>
              Forum
            </a>
            <a href="#" className={style.text}>
              Community
            </a>
            <a href="#" className={style.text}>
              Contact Mapped
            </a>
            <a href="#" className={style.text}>
              Premium Support
            </a>
            <a href="#" className={style.text}>
              Skills
            </a>
          </div>
          <div className={style.info}>
            <h1 className={style.title}>Company</h1>
            <a href="#" className={style.text}>
              About
            </a>
            <a href="#" className={style.text}>
              Blog
            </a>
            <a href="#" className={style.text}>
              Careers
            </a>
            <a href="#" className={style.text}>
              Shop
            </a>
          </div>
        </div>
      </div>
      <div className={style.endline}>
        <div className="container">
          <div className={style.inner}>
            <div className={style.copyright}>
              <p className={style.text}>Copyright 2023 Mapped, Inc.</p>
              <a href="#" className={style.text}>
                Terms
              </a>
              <a href="#" className={style.text}>
                Privacy
              </a>
              <a href="#" className={style.text}>
                Sitemap
              </a>
              <a href="#" className={style.text}>
                What is Mapped?
              </a>
            </div>

            <div className={style.socials}>
              <a href="#">
                <img className={style.img} src={instagram} alt="" />
              </a>
              <a href="#">
                <img className={style.img} src={facebook} alt="" />
              </a>
              <a href="#">
                <img className={style.img} src={twitter} alt="" />
              </a>
              <a href="#">
                <img className={style.img} src={tiktok} alt="" />
              </a>
              <a href="#">
                <img className={style.img} src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
