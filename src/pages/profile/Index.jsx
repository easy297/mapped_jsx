import Footer from "../../layout/Footer/Footer";

import style from "./Index.module.scss";
import { Sidebar } from "../../components/static-components/static-components";
import Map from "../../components/map/Map";

const Index = () => {
  return (
    <>
      <div className={style.profile}>
        <Sidebar />

        <Map />
      </div>
      <Footer />
    </>
  );
};

export default Index;
