import React from "react";
import s from "./About.module.css";
import html from "../../assets/skills/html-extension.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/javascript.png";
import redux from "../../assets/skills/redux.png";
import react from "../../assets/skills/react.png";
import ts from "../../assets/skills/typescript.png";

export const About = () => {
  return (
    <div>
      <div className={s.main}>
        <div className={s.info}>
          <div className={s.title}>
            <h4>ABOUT ME</h4>
            <div></div>
          </div>
          <div className={s.wrapper}>
            <ul>
              <li>
                <span className={s.first}>Name: </span>
                <span className={s.second}>Yevdunova Tatiana</span>
              </li>
              <li>
                <span className={s.first}>Address: </span>
                <span className={s.second}>Bratislava, Slovakia</span>
              </li>
              <li>
                <span className={s.first}>Study: </span>
                <span className={s.second}>Lugansk National University</span>
              </li>
              <li>
                <span className={s.first}>Degree: </span>
                <span className={s.second}>master of preschool education</span>
              </li>
              <li>
                <span className={s.first}>Mail: </span>
                <a href="mailto:evdunova.tania@gmail.com" className={s.second}>
                  evdunova.tania@gmail.com
                </a>
              </li>
              <li>
                <span className={s.first}>Phone: </span>
                <a href="tel:+421 940 161 490" className={s.second}>
                  +421 940 161 490
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.programming}>
          <div className={s.title}>
            <h4>MY SKILLS</h4>
            <div></div>
          </div>
          <div className={s.skills}>
            <div className={s.programmingName}>
              <div>
                <img src={html} alt="#" />
              </div>
              <div className={s.skillName}>HTML</div>
            </div>
            <div className={s.programmingName}>
              <div>
                <img src={css} alt="#" />
              </div>
              <div className={s.skillName}>CSS</div>
            </div>
            <div className={s.programmingName}>
              <div>
                <img src={js} alt="#" />
              </div>
              <div className={s.skillName}>JavaScript</div>
            </div>
            <div className={s.programmingName}>
              <div>
                <img src={ts} alt="#" />
              </div>
              <div className={s.skillName}>TypeScript</div>
            </div>
            <div className={s.programmingName}>
              <div>
                <img src={react} alt="#" />
              </div>
              <div className={s.skillName}>React</div>
            </div>
            <div className={s.programmingName}>
              <div>
                <img src={redux} alt="#" />
              </div>
              <div className={s.skillName}>Redux Toolkit</div>
            </div>
          </div>
        </div>
        <div className={s.language}>
          <div className={s.title}>
            <h4>Language</h4>
            <div></div>
          </div>
          <ul>
            <li>
              <div className={s.listInner}>
                <div className={s.myCircle}>
                  <div className={s.circle + " " + s.num3}></div>
                  <span className={s.number}>75%</span>
                </div>
                <div className={s.lang}>
                  <span>English</span>
                </div>
              </div>
            </li>
            <li>
              <div className={s.listInner}>
                <div className={s.myCircle}>
                  <div className={s.circle + " " + s.num1}></div>
                  <span className={s.number}>95%</span>
                </div>
                <div className={s.lang}>
                  <span>Russian</span>
                </div>
              </div>
            </li>
            <li>
              <div className={s.listInner}>
                <div className={s.myCircle}>
                  <div className={s.circle + " " + s.num1}></div>
                  <span className={s.number}>95%</span>
                </div>
                <div className={s.lang}>
                  <span>Ukraine</span>
                </div>
              </div>
            </li>
            <li>
              <div className={s.listInner}>
                <div className={s.myCircle}>
                  <div className={s.circle + " " + s.num2}></div>
                  <span className={s.number}>85%</span>
                </div>
                <div className={s.lang}>
                  <span>Slovak</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
