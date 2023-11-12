import styles from "./Discover.module.css";
import camera from "../../assets/camera-3D.png";
import LearnMore from "../btns/LearnMore";
import Checks from "./Checks";

const Discover = () => {
  return (
    <>
      <section className={styles.discover}>
        <div className="container">
          <h1 className={styles.title}>Discover the World's Hidden Gems</h1>

          <div className={styles.info}>
            <div className={styles.text}>
              <p className={styles.subtitle}>
                Our website opens the door to a world of discovery, allowing you
                to explore a vast collection of pins and notes created by fellow
                nature lovers. From secluded hiking trails and tranquil
                lakeshores to breathtaking mountain vistas and serene forest
                retreats, you'll find a treasure trove of awe-inspiring
                locations.
              </p>

              <p className={styles.subtitleGray}>
                Join us in celebrating the beauty of our world's nature. Start
                your journey today, and together, let's create a global map that
                showcases the remarkable and diverse landscapes that make our
                planet so extraordinary.
              </p>

              <LearnMore />
            </div>

            <div className={styles.camera}>
              <img src={camera} alt="camera" />
            </div>
          </div>
        </div>
      </section>
      <Checks />
    </>
  );
};

export default Discover;
