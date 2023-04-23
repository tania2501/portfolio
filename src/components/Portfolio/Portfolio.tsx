import React from "react";
import s from "./Portfolio.module.css";
import social from "../../assets/img-folder/social.jpg";
import todo from "../../assets/img-folder/to-do-list.jpg";
import count from "../../assets/img-folder/counter.jpg";
import wom from "../../assets/img-folder/womaizing.jpg";
import arr from './../../assets/img-folder/arrow-2-32.png'

export const Portfolio = () => {
  return (
    <div className={s.portfolio}>
      <div className={s.title}>
        <h4>PORTFOLIO</h4>
        <div></div>
      </div>
      <div className={s.main}>
        <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${social})` }}
        ></div>
        <div className={s.overlay}><a href="https://tania2501.github.io/samurai-way-main/"><img src={arr} alt="#"/></a></div>
        <a href="https://tania2501.github.io/samurai-way-main/">Social Network</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${todo})` }}
        ></div>
        <div className={s.overlay}><a href="https://tania2501.github.io/1-todolist/"><img src={arr} alt="#"/></a></div>
        <a href="https://tania2501.github.io/1-todolist/">To-do-list</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${count})` }}
        ></div>
        <div className={s.overlay}><a href="https://tania2501.github.io/counter-two/"><img src={arr} alt="#"/></a></div>
        <a href="https://tania2501.github.io/counter-two/">Counter</a>
      </div>
      <div className={s.mainItem}>
        <div
          className={s.item}
          style={{ backgroundImage: `url(${wom})` }}
        ></div>
        <div className={s.overlay}><a href="https://tania2501.github.io/woom/"><img src={arr} alt="#"/></a></div>
        <a href="https://tania2501.github.io/woom/">Womazing</a>
      </div>
      </div>
      
    </div>
  );
};
