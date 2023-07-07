import React from "react";
import s from "./Contact.module.css";
import phone from "./../../assets/icon/phone.png";
import local from "./../../assets/icon/pin.png";
import mail from "./../../assets/icon/forward.png";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { sendMessage } from "../api/api";
import { toast } from "react-toastify";

export type DataFormType = {
  name: string;
  email: string;
  phone: number;
  message: string;
};
export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<DataFormType>({mode: "onChange"});
  const onSubmit = handleSubmit(async (data) => {
    sendMessage(data).then((res) => {
      toast.success(res.data.message) 
    }).catch((e) => {
      toast.error(e)
    })
    reset()
  });
  return (
    <div className={s.main}>
      <div className={s.title}>
        <h4>GET IN TOUCH</h4>
        <div></div>
      </div>
      <div className={s.blocks}>
        <div className={s.blockItem}>
          <img src={local} alt="#" />
          <a href="https://www.google.com/maps/place/Bratislava/@48.1356952,16.9758341,11z/data=!3m1!4b1!4m6!3m5!1s0x476c89360aca6197:0x631f9b82fd884368!8m2!3d48.1485965!4d17.1077478!16zL20vMDE1Zzc?entry=ttu">Bratislava, Slovakia</a>
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
      <form className={s.form} method="get" id="sendForm" onSubmit={onSubmit}>
        <p className={s.error}>
          {errors.name && errors.name.message}
        </p>
        <input {...register('name', {
          required: "Name is required",
        })} type="text" className={s.input} placeholder="Name" name="name" />
        <p className={s.error}>
          {errors.email && errors.email.message}
        </p>
        <input
          {...register('email', {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          type="text"
          className={s.input}
          placeholder="Email"
          name="email"
        />
        <input
          {...register('phone', {
            required: "Phone number is required"
          })}
          type="tel"
          className={s.input}
          placeholder="Phone"
          name="phone"
        />
        <textarea
          {...register('message')}
          name="message"
          className={s.text}
          placeholder="Message"
        ></textarea>
        <div>
          <Button title={"Send message"} isValid={isValid}/>
        </div>
        
      </form>
      <div className={s.map}>
        <iframe title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21279.661971545574!2d17.1350712!3d48.1881656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2ssk!4v1682246248789!5m2!1sru!2ssk"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
