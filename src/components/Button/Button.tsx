import React from "react";
import s from './Button.module.css'
import { NavLink, useNavigate } from "react-router-dom";

type ButtonPropsType = {
  title: string
  isValid?: boolean
}

export const Button = (props: ButtonPropsType)=> {
  const navigate = useNavigate()
  function handleClick() {
   navigate('/Contact')
  }
  return (
    <div className={s.button}>
      {props.title === "Get in touch" ? <button onClick={handleClick}><NavLink to={"/Contact"}>{props.title}</NavLink></button> 
        : <button disabled={!props.isValid} type='submit' className={!props.isValid ? s.disable : ''}>{props.title}</button>
      }
    </div>
  )
}