import React from "react";
import s from "./About.module.css";

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
            <h4>PROGRAMMING</h4>
            <div></div>
          </div>
          <div className={s.programmingName}>
            <div className={s.inlineProgrammingName}>
              HTML & CSS <div>90%</div>
            </div>
            <div className={s.border}>
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className={s.programmingName}>
            <div className={s.inlineProgrammingName}>
              JavaScript <div>70%</div>
            </div>
            <div className={s.border}>
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
          <div className={s.programmingName}>
            <div className={s.inlineProgrammingName}>
              TypeScript <div>80%</div>
            </div>
            <div className={s.border}>
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className={s.programmingName}>
            <div className={s.inlineProgrammingName}>
              React <div>70%</div>
            </div>
            <div className={s.border}>
              <span style={{ width: "70%" }}></span>
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
                  <div className={s.circle + ' ' + s.num3}></div>
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
                  <div className={s.circle + ' ' + s.num1}></div>
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
                  <div className={s.circle + ' ' + s.num1}></div>
                  <span className={s.number}>95%</span>
                </div>
                <div className={s.lang}>
                  <span>Ukraine</span>
                </div>
              </div>
            </li>
            <li>
              <div className={s.listInner}>
                <div className={s.myCircle} >
                  <div className={s.circle + ' ' + s.num2}></div>
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
