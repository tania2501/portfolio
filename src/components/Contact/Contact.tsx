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
        <div style={{ width: "290px" }}></div>
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
       <Button title={"Send message"} onClick={()=>{}}/>
      </form>
    </div>
  );
};
