import React from "react";
import s from "./Portfolio.module.css";
import social from "../../assets/img-folder/social.jpg";
import todo from "../../assets/img-folder/to-do-list.jpg";
import count from "../../assets/img-folder/counter.jpg";
import wom from "../../assets/img-folder/womaizing.jpg";

export const Portfolio = () => {
  return (
    <div>
      <div className={s.title}>
        <h4>PORTFOLIO</h4>
        <div style={{ width: "390px" }}></div>
      </div>
      <div className={s.main}>
        <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${social})` }}
        ></div>
        <div className={s.overlay}></div>
        <a href="#">Social Network</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${todo})` }}
        ></div>
        <div className={s.overlay}></div>
        <a href="#">To-do-list</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${count})` }}
        ></div>
        <div className={s.overlay}></div>
        <a href="#">Counter</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${wom})` }}
        ></div>
        <div className={s.overlay}></div>
        <a href="#">Womazing</a>
      </div>
      </div>
      
    </div>
  );
};
