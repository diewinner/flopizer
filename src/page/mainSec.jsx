import React from "react";
import Cube from '../assets/img/Cube.jpg'
import firstChild from "../assets/img/firstChild.jpg";
import secChild from "../assets/img/secChild.jpg";
import screenShot from '../assets/img/screenShotPostFlopizer.jpg'
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

            <div className={cls.strategy_container}>
                <div className={cls.strategy_text}>
                    <div className={cls.strategy_text__title}>
                        Strategy Editor
                    </div>
                    <div className={cls.strategy_text__subtitle}>
                        Lock any hand, customize any nod
                    </div>
                    <div className={cls.strategy_text__btn}>
                        Learn more >
                    </div>
                    <ul className={cls.strategy_text__list}>
                        <li className={cls.strategy_text__list__item}>Quick Start Mode</li>
                        <li className={cls.strategy_text__list__item}>5 Analytical View Modes</li>
                        <li className={cls.strategy_text__list__item}>Your History, Saved</li>
                    </ul>
                    <div className={cls.m_title_container__btn_container}>
                        <button>
                            Try for free
                        </button>
                    </div>
                </div>
                <div className={cls.strategy_img}>
                    <img src={screenShot} alt={'Screenshot'}/>
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

            <div className={cls.price_container}>
                <div className={cls.skills_title}>
                    Fair prices for fair play
                </div>
                <div>
                    <div className={cls.price_container_flex}>
                        <div className={cls.price_item}>
                            <div className={cls.price_item__header}></div>
                            <div className={cls.price_item__title}>
                                Free
                            </div>
                            <ul className={cls.price_item__list}>
                                <li className={cls.price_item__list__item}>Great way to explore the features</li>
                                <li className={cls.price_item__list__item}>All tools except flop editing</li>
                            </ul>
                            <div className={cls.price_item__price}>
                                $0
                            </div>
                            <div className={cls.price_item__container_btn}>
                                <button className={cls.price_item__btn} >
                                    Try it for free
                                </button>
                            </div>
                        </div>
                        <div className={cls.price_item__icm}>
                            <div className={cls.price_item__icm__header}></div>
                            <div className={cls.price_item__icm__title}>
                                Standart
                            </div>
                            <ul className={cls.price_item__icm__list}>
                                <li className={cls.price_item__icm__list__item}>Full version</li>
                                <li className={cls.price_item__icm__list__item}>All features included</li>
                                <li className={cls.price_item__icm__list__item}>More features yet to come</li>
                            </ul>
                            <div className={cls.price_item__icm__price}>
                                <span className={cls.price_item__icm__price__true}>$300</span>
                                <span className={cls.price_item__icm__price__sale}>$270</span>
                                <div className={cls.price_item__icm__price__time}>
                                    One-time purchase
                                </div>
                            </div>
                            <div className={cls.price_item__icm__container_btn}>
                                <button className={cls.price_item__icm__btn} >
                                    Buy the Standard Pack
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cls.price_options_container}>
                <div className={cls.price_options__text}>
                    <div className={cls.price_options__text__title}>
                        “All I wanted to do was create a postflop GTO solver that wouldn't induce nosebleeds. I believe we've succeeded.”
                    </div>
                    <div className={cls.price_options__text__subtitle}>Valentin Kuzub, CEO and Founder</div>
                </div>
                <div className={cls.price_options__btn_container}>
                    <button className={cls.price_options__btn_container__btn}>Pricing options</button>
                </div>
            </div>
        </div>
    )
}