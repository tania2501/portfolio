import React from "react";
import s from './FotoBlock.module.css'
import foto from './../../assets/img/foto3.jpg'
export const FotoBlock = () => {
  return (
    <div className={s.fotoBlock}>
      <div className={s.personalFoto}>
        <img src={foto} alt="#"/>
      </div>
    </div>
  )
}