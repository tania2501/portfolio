import React from "react";
import s from "./Home.module.css";
import { Button } from "../Button/Button";

export const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.main}>
        <h1 className={s.fullName}>YEVDUNOVA TATIANA</h1>
        <div className={s.fullnameJob}>
          Front-end<div className={s.job}>Developer</div>
        </div>
        <Button title={"Get in touch"} />
      </div>
    </div>
  );
};
