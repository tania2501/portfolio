import React from "react";
import s from "./Contact.module.css";
import phone from "./../../assets/icon/phone.png";
import local from "./../../assets/icon/pin.png";
import mail from "./../../assets/icon/forward.png";
import { Button } from "../Button/Button";

export const Contact = () => {
  return (
    <div className={s.main}>
      <div className={s.title}>
        <h4>GET IN TOUCH</h4>
        <div></div>
      </div>
      <div className={s.blocks}>
        <div className={s.blockItem}>
          <img src={local} alt="#" />
          <a href="#">Bratislava, Slovakia</a>
        </div>
        <div className={s.blockItem}>
          <img src={mail} alt="#" />
          <a href="mailto:evdunova.tanya@gmail.com">evdunova.tania@gmail.com</a>
        </div>
        <div className={s.blockItem}>
          <img src={phone} alt="#" />
          <a href="tel:+421940161491">+421 940 161 491</a>
        </div>
      </div>
      <form className={s.form} method="get" id="sendForm">
        <input
          type="text"
          className={s.input}
          placeholder="Name"
          name="Name"
        />
        <input
          type="text"
          className={s.input}
          placeholder="Email"
          name="Email"
        />
        <input
          type="text"
          className={s.input}
          placeholder="Phone"
          name="Phone"
        />
        <textarea
          name="massage"
          className={s.text}
          placeholder="Message"
        ></textarea>
       <Button title={"Send message"}/>
      </form>
      <div className={s.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21279.661971545574!2d17.1350712!3d48.1881656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2ssk!4v1682246248789!5m2!1sru!2ssk" width="100%" height="300"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};
