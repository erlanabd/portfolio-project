import { Navigate, Route, Routes } from "react-router-dom";
import Experiences from "../../pages/Experiences";
import Header from "../header";
import DetailExperience from "../../pages/Experiences/Detail";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import DetailProject from "../../pages/Projects/Detail";
import Resume from "../../pages/Resume";
import Search from "../../pages/Search";
import Skills from "../../pages/Skills";
import DetailSkill from "../../pages/Skills/Detail";
import styles from "./styles.module.scss";
import common from "./../../assets/styles/common.module.scss";

function App() {
  return (
    <div className={styles["main-layout"]}>
      <div className={styles["header"]}>
        <div className={common.container}>
          <Header />
        </div>
      </div>
      <div className={common["container"]}>
        <div className={styles["page-indent"]}>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/skills"}>
              <Route index element={<Skills />} />
              <Route path={":slug"} element={<DetailSkill />} />
            </Route>
            <Route path={"/projects"}>
              <Route index element={<Projects />} />
              <Route path={":id"} element={<DetailProject />} />
            </Route>
            <Route path={"/experiences"}>
              <Route index element={<Experiences />} />
              <Route path={":slug"} element={<DetailExperience />} />
            </Route>
            <Route path={"/search"} element={<Search />} />
            <Route path={"/resume"} element={<Resume />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
