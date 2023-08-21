import React from "react";

export const CeoStatement = ({btn, author, text, cls}) => {
  return (
      <div className={cls.price_options_container}>
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