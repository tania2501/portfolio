import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.navmenu}>
          <div className={s.item}>
            <NavLink
              to="/" 
              className={({isActive}) => isActive ? s.activeLink : ''}
            >
              Home
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              About
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Portfolio
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Contact
            </NavLink>
          </div>
          <span className={s.block}></span>
        </nav>
      </div>
    </header>
  );
};
