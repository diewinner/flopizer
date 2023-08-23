import React from "react";
import cls from '../../assets/styles/mainSec.module.scss';

export const CeoStatement = ({btn, author, text}) => {
  return (
      <div className={author === 'Valentin Ruzub, CEO and Founder' ? cls.price_options_container_other : cls.price_options_container}>
          <div className={cls.price_options__text}>
              <div className={cls.price_options__text__title}>
                  {text}
              </div>
              <div className={cls.price_options__text__subtitle}>{author}</div>
          </div>
          <div className={cls.price_options__btn_container}>
              <button className={cls.price_options__btn_container__btn}>{btn}</button>
          </div>
      </div>
  )
}