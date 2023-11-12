import styles from "./Checks.module.css";

import mark from "../../assets/svg-icons/claw-marks.svg";
import users from "../../assets/svg-icons/users.svg";
import hiking from "../../assets/svg-icons/hiking.svg";
import shield from "../../assets/svg-icons/shield-check.svg";

const Checks = () => {
  return (
    <>
      <div className={styles.checks}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.item}>
              <img src={mark} alt="mark" />
              <p>Leave Your Mark and Explore</p>
            </div>
            <div className={styles.item}>
              <img src={users} alt="users" />
              <p>Make awesome Friends</p>
            </div>
            <div className={styles.item}>
              <img src={hiking} alt="hiking" />
              <p>Plan Your Next Adventure</p>
            </div>
            <div className={styles.item}>
              <img src={shield} alt="shield" />
              <p>Preserve and Protect</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checks;
