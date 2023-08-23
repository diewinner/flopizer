import screenShot from "../../../assets/img/screenShotPostFlopizer.jpg";
import React from "react";
import {Arrow} from "../../../assets/svg/arrow";

export const Caruselitem4 = ({cls}) => {
    return (
        <div className={cls.carusel_content}>
            <div className={cls.strategy_img}>
                <img src={screenShot} alt={'Screenshot'}/>
            </div>
            <div className={cls.strategy_text}>
                <div className={cls.strategy_text__wrapper}>
                    <h4 className={cls.strategy_text__title}>
                        Lock any hand, customize (item4)
                    </h4>
                    <div className={cls.strategy_text__subtitle}>
                        <p>And our library of templates has inspiration for everything from wireframes to network
                            diagrams (item4).</p>
                        <p>And our library of templates has inspiration for everything from wireframes to network
                            diagrams. (item4)</p>
                    </div>
                    <a className={cls.strategy_text__btn}>
                        <span>Learn more</span> <Arrow/>
                    </a>
                </div>
            </div>
        </div>
    )
}