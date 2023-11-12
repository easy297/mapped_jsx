import {Sidebar}  from "../../components/static-components/static-components";

import style from "./City.module.css";
import bg from "../../assets/city-bg.jpg";

const City = () => {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <div className={style.wrap}>
        <div className={style.infoWrap}>
          <div className={style.country}>KAZAKHSTAN</div>
          <div className={style.city}>Almaty</div>
          <div className={style.population}>Population: 1.777 mil</div>
          <div className={style.info}>
            Almaty, Kazakhstan's largest metropolis, is set in the foothills of
            the Trans-Ili Alatau mountains. It served as the country's capital
            until 1997 and remains Kazakhstan's trading and cultural hub.
            Landmarks include the Central State Museum, displaying thousands of
            historic Kazakh artifacts. In the center is Panfilov Park, home to
            the bright-yellow towers of Zenkov Cathedral, a tsarist-era Russian
            Orthodox church. ― Google
          </div>
        </div>

        <div className={style.picture}>
          <img className={style.picImg} src={bg} alt="city-pic" />
        </div>
      </div>
    </div>
  );
};

export default City;
