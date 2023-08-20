import React from "react";
import Cube from '../assets/img/Cube.jpg'
import firstChild from "../assets/img/firstChild.jpg";
import secChild from "../assets/img/secChild.jpg";
export const MainSec = ({ cls }) => {
    return (
        <div className={cls.main_container}>
            <div className={cls.m_title_container}>
                <div className={cls.m_title_container__text}>
                    <div className={cls.m_title_container__text__title}>
                        Powerful and seamless
                        <br/>
                        postflop GTO solver
                    </div>
                    <div className={cls.m_title_container__text__subtitle}>
                        Enhance your comprehension of poker dynamics <br/> while inventing new strategies with Postflopizer
                    </div>
                    <div className={cls.m_title_container__btn_container}>
                        <button>
                        Try for free
                        </button>
                    </div>
                </div>
                <div className={cls.m_title_container__img}>
                    <img src={Cube} alt={'Cube'}/>
                </div>
            </div>

            <div className={cls.coachers_container}>
                <div className={cls.postflopizer_detail_container__title}>
                    Advanced analytics, seamless UX and powerful engine. Everything you need to craft smart and creative poker strategies
                </div>
                <div className={cls.coachers_list_flex}>
                    <div className={cls.coacher_item}>
                        <div className={cls.coacher_item__img}>
                            <img src={firstChild}  alt={"coacher"}/>
                        </div>
                        <div className={cls.coacher_item__text}>
                            <div className={cls.coacher_item__text__quote}>“The Strategy Editor feature is a game changer, no doubt.”</div>
                            <div className={cls.coacher_item__text__author}>Mike Wasserman, advanced coach</div>
                        </div>
                    </div>
                    <div className={cls.coacher_item}>
                        <div className={cls.coacher_item__img}>
                            <img src={secChild}  alt={"coacher"}/>
                        </div>
                        <div className={cls.coacher_item__text}>
                            <div className={cls.coacher_item__text__quote}>“Top tournament tool that I now personally use.”</div>
                            <div className={cls.coacher_item__text__author}>Collin Moshman, poker godfather</div>
                        </div>
                    </div>
                    <div className={cls.coacher_item}>
                        <div className={cls.coacher_item__img}>
                            <img src={firstChild}  alt={"coacher"}/>
                        </div>
                        <div className={cls.coacher_item__text}>
                            <div className={cls.coacher_item__text__quote}>“The Strategy Editor feature is a game changer, no doubt.”</div>
                            <div className={cls.coacher_item__text__author}>Mike Wasserman, advanced coach</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cls.skills_container}>
                <div className={cls.skills_title}>
                    Fuel your skills, <span>multiply your wins</span>
                </div>

                <div className={cls.skills_list}>
                    <div className={cls.skills_list__flex}>
                        <div className={cls.skills_item}>
                            <div className={cls.skills_item__title}>
                                <span>Intuitive</span> interface
                            </div>
                            <div className={cls.skills_item__subtitle}>
                                Learning doesn't equate to struggling. The typical Postflopizer user spends no more than 10
                                minutes onboarding.
                            </div>
                        </div>
                        <div className={cls.skills_item}>
                            <div className={cls.skills_item__title}>
                                <span>Precise results</span> at reasonable speed
                            </div>
                            <div className={cls.skills_item__subtitle}>
                                Postflopizer quickly calculates the Nash equilibrium and delivers the key insights of the
                                most efficient, low-exploitability strategies.
                            </div>
                        </div>
                    </div>
                    <div className={cls.skills_list__flex}>
                        <div className={cls.skills_item}>
                            <div className={cls.skills_item__title}>
                                <span>Easy-to-digest</span> outcomes
                            </div>
                            <div className={cls.skills_item__subtitle}>
                                Capture the core concept at first glance, then seamlessly dive into intricate details.
                                Almost effortlessly.
                            </div>
                        </div>
                        <div className={cls.skills_item}>
                            <div className={cls.skills_item__title}>
                                Working on multiple strategies <span>simultaneously</span>
                            </div>
                            <div className={cls.skills_item__subtitle}>
                                Don't wait for calculations to finish – make changes and queue them. Compare your past
                                solutions alongside new calculations.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.skills_btn}>
                    Compare Postflopizer with other GTO solvers >
                </div>
            </div>
        </div>
    )
}