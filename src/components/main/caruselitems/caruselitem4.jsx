import screenShot from "../../../assets/img/screenShotPostFlopizer.jpg";
import React from "react";

export const Caruselitem4 = ({cls}) => {
    return (
        <div className={cls.carusel_content}>
            <div className={cls.strategy_img}>
                <img src={screenShot} alt={'Screenshot'}/>
            </div>
            <div className={cls.strategy_text}>
                <div className={cls.strategy_text__subtitle}>
                    Return to your findings at any time
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