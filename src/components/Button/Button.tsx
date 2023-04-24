import React from "react";
import s from './Button.module.css'
import { NavLink } from "react-router-dom";

type ButtonPropsType = {
  title: string
}

export const Button = (props: ButtonPropsType)=> {
  return (
    <div className={s.button}>
      {props.title === "Get in touch" ? <button><NavLink to={"/portfolio/Contact"}>{props.title}</NavLink></button> 
        : <button disabled={true}>{props.title}</button>
      }
    </div>
  )
}