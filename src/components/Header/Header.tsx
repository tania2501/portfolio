import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    menu && (document.body.style.overflow = 'hidden')
    !menu && (document.body.style.overflow = 'unset')
}, [menu]) // отключает прокрутку при открытом меню
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h2>PORTFOLIO</h2>
        <nav className={s.navmenu + " " + (menu ? s.active : "")}>
          <div className={s.foto}></div>
          <div className={s.item}>
            <NavLink
              to="/portfolio/"
              className={({ isActive }) => (isActive ? s.activeLink : "")}
              onClick={() => setMenu(false)}
            >
              Home
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/portfolio/About"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              onClick={() => setMenu(false)}
            >
              About
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/portfolio/Portfolio"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              onClick={() => setMenu(false)}
            >
              Portfolio
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/portfolio/Contact"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
              onClick={() => setMenu(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <div
          className={s.hamburger + " " + (menu ? s.active : "")}
          onClick={() => setMenu(!menu)}
        >
          <span className={s.bar}></span>
          <span className={s.bar}></span>
          <span className={s.bar}></span>
        </div>
      </div>
    </header>
  );
};
