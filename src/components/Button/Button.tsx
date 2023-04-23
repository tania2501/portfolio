import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
  title: string
}

export const Button = (props: ButtonPropsType)=> {
  return (
    <div className={s.button}>
      <button><a href="/Contact">{props.title}</a></button>
    </div>
  )
}