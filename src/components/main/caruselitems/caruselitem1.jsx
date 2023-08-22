import screenShot from "../../../assets/img/screenShotPostFlopizer.jpg";
import React from "react";

export const Caruselitem1 = ({cls}) => {
  return (
      <div className={cls.carusel_content}>
          <div className={cls.strategy_img}>
              <img src={screenShot} alt={'Screenshot'}/>
          </div>
          <div className={cls.strategy_text}>
              <div className={cls.strategy_text__subtitle}>
                  Lock any hand, customize any nod
              </div>
              <div className={cls.strategy_text__btn}>
                  Learn more >
              </div>
              <div className={cls.m_title_container__btn_container}>
                  <button>
                      Try for free
                  </button>
              </div>
          </div>
      </div>
  )
}