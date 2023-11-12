import styles from "./ConnectCommunity.module.css";
import travel from "../../assets/travel.jpg";
import LearnMore from "../btns/LearnMore";

const ConnectCommunity = () => {
  return (
    <>
      <section className={styles.discover}>
        <div className="container">
          <h1 className={styles.title}>Collaborative Exploration</h1>

          <div className={styles.info}>
            <div className={styles.img}>
              <img src={travel} alt="travel with MAPPED" />
            </div>

            <div className={styles.text}>
              <p className={styles.subtitle}>
                Our website is more than just a map; it's a thriving community
                of nature enthusiasts and explorers. Connect with like-minded
                individuals, swap travel tips, and inspire each other to embark
                on new adventures. You'll be part of a global network of
                individuals who share a deep love for the great outdoors.
              </p>

              <p className={styles.subtitleGray}>
                Members can collaborate on projects or adventures. They might
                plan group hikes, environmental clean-up efforts, or even
                organize trips to discover uncharted territories. This
                collaborative aspect encourages teamwork and shared experiences.
              </p>

              <LearnMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConnectCommunity;
