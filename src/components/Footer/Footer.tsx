import React from "react";
import s from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={s.footer}><div className={s.container}>
      <div>Copyright © 2023</div>
      <div className={s.social}>
        <a href="https://www.facebook.com/TaniaEvdunova" className={s.fb}></a>
        <a href="https://ru.linkedin.com/" className={s.linkedin}></a>
        <a href="https://instagram.com/taniaevdunova?igshid=mznlngnkzwq4mg==" className={s.insta}></a>
        <a href="https://t.me/TatyanaYevdunova" className={s.tele}></a>
        <a href="https://github.com/tania2501" className={s.git}></a>
      </div>
    </div>
    </footer>
  )
}