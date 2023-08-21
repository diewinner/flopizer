import React from "react";
import Cube from '../assets/img/Cube.jpg'
import firstChild from "../assets/img/firstChild.jpg";
import secChild from "../assets/img/secChild.jpg";
import screenShot from '../assets/img/screenShotPostFlopizer.jpg'
import {PriceBoard} from "../components/main/priceBoard";
import Star from "../assets/img/Star 2.svg"
import {CeoStatement} from "../components/main/ceoStatement";
export const MainSec = ({ cls }) => {
    const contentPrice =
        {
            title:"Standard",
            li1:"Full version",
            li2:"All features included",
            li3:"More features yet to come",
            price:"$270",
            priceOld:"$300",
            btn:"Buy the Standard Pack",
            info:"One-time purchase",
        }

    const contentFree =
        {
            title:"Free",
            li1:"Great way to explore the features",
            li2:"Great way to explore the features",
            price:"$0",
            btn:"Try it for free"
        }

    const ceo = {
        text:'“All I wanted to do was create a postflop GTO solver that wouldn\'t induce nosebleeds. I believe we\'ve succeeded.”',
        author: 'Valentin Kuzub, CEO and Founder',
        btn: 'Pricing options'
    }
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
                {Star && <div className={cls.price_discount_star}><span>-10%</span>
                    <div>discount for the early birds</div></div>}
                <div className={cls.price_title}>
                    Fair prices for fair play
                </div>
                <div>
                    <div className={cls.price_container_flex}>
                                <PriceBoard
                                    cls={cls}
                                    clsBtn={cls.price_item__btn}
                                    clsLi={cls.price_item__list__item}
                                    clsBorder={cls.price_item}
                                    clsHead={cls.price_item__header}
                                    title={contentFree.title}
                                    li1={contentFree.li1}
                                    li2={contentFree.li2}
                                    price={contentFree.price}
                                    btn={contentFree.btn} />
                                <PriceBoard

                                    cls={cls}
                                    clsBtn={cls.price_item__icm__btn}
                                    clsLi={cls.price_item__icm__list__item}
                                    clsBorder={cls.price_item__icm}
                                    clsHead={cls.price_item__icm__header}
                                    title={contentPrice.title}
                                    li1={contentPrice.li1}
                                    li2={contentPrice.li2}
                                    li3={contentPrice.li3}
                                    price={contentPrice.price}
                                    priceOld={contentPrice.priceOld}
                                    btn={contentPrice.btn}
                                    info={contentPrice.info}/>
                    </div>
                </div>
            </div>
            <CeoStatement text={ceo.text} author={ceo.author} btn={ceo.btn} cls={cls}/>
        </div>
    )
}