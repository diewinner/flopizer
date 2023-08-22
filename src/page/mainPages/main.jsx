import React from "react";
import screenShotPost from '../../assets/img/screenShotPostFlopizer.jpg'
import screenShotIc from '../../assets/img/icmizerScreen.jpg'
import firstChild from '../../assets/img/firstChild.jpg'
import secChild from '../../assets/img/secChild.jpg'
import {CeoStatement} from "../../components/main/ceoStatement";
import {PriceBoard} from "../../components/main/priceBoard";
import ToggleSlider from "../../components/main/toggle";
import tog from '../../assets/styles/components/main/toggle.module.scss'
import cls from '../../assets/styles/main.module.scss';
import clsSec from '../../assets/styles/mainSec.module.scss';

export const Main = () => {

    const ceo = {
        text:'“By crafting an engaging and user-friendly experience, I aimed to make the journey of acquiring poker skills a genuinely enjoyable one, fostering a renewed passion for the game.”',
        author: 'Valentin Kuzub, CEO and Founder',
        btn: 'Pricing options'
    }

    const contentFree =
        {
            title:"Postflopizer ",
            li1:"Great way to explore",
            li2:"Great way to explore",
            price:"0",
            btn:"Get your Demo"
        }
    const contentFreeSec =
        {
            title:"Icmizer ",
            li1:"Great way to explore",
            li2:"Great way to explore",
            price:"0",
            btn:"Get your Trial"
        }
    return (
        <div className={cls.main_container}>

            <div className={cls.m_title_container}>
                <div className={cls.m_title_container__text}>
                    <div className={cls.m_title_container__text__title}>
                        Raise your game
                        <br/>
                        in tournament poker
                    </div>
                    <div className={cls.m_title_container__text__subtitle}>
                        Discover Icmizer and Postflopizer GTO Solvers designed to improve your skills on every street
                    </div>
                </div>
                <button className={cls.m_title_container__btn}>
                    Try for free
                </button>
            </div>

            <div className={cls.postflopizer_detail_container}>
                <div className={cls.postflopizer_detail_container__title}>
                    Secure your victories from preflop to the river
                </div>
                <div className={cls.postflopizer_detail_container__info}>
                    <div className={cls.postflopizer_detail_container__info__main}>
                        <div className={cls.postflopizer_detail_container__info__main__text}>
                            <div className={cls.postflopizer_detail_container__info__main__text__title}>
                                Brand new tool to craft smart and creative poker strategies
                            </div>
                            <ul className={cls.postflopizer_detail_container__info__main__text__list}>
                                <li className={cls.postflopizer_detail_container__info__main__text__list__item}>
                                    Postflop Strategy Editor
                                </li>
                                <li className={cls.postflopizer_detail_container__info__main__text__list__item}>
                                    Quick Start Mode
                                </li>
                                <li className={cls.postflopizer_detail_container__info__main__text__list__item}>
                                    5 Analytical View Modes
                                </li>
                                <li className={cls.postflopizer_detail_container__info__main__text__list__item}>
                                    Your History, Saved
                                </li>
                                <li className={cls.postflopizer_detail_container__info__main__text__list__item}>
                                    10 minutes to onboard max
                                </li>
                            </ul>
                        </div>
                        <div className={cls.postflopizer_detail_container__info__main__screen}>
                            <img src={screenShotPost}   alt={"logo"}/>
                        </div>
                    </div>
                    <div className={cls.postflopizer_detail_container__info__btns}>
                        <div className={cls.postflopizer_detail_container__info__btns__learn}>
                            Learn more >
                        </div>
                        <button className={cls.postflopizer_detail_container__info__btns__demo}>
                            Free demo >
                        </button>
                    </div>
                </div>
            </div>

            <div className={cls.icmizer_detail_container}>

                <div className={cls.icmizer_detail_container__info}>
                    <div className={cls.icmizer_detail_container__info__main}>
                        <div className={cls.icmizer_detail_container__info__main__text}>
                            <div className={cls.icmizer_detail_container__info__main__text__title}>
                                Time-tested preflop solver loved by thousands of poker players
                            </div>
                            <ul className={cls.icmizer_detail_container__info__main__text__list}>
                                <li className={cls.icmizer_detail_container__info__main__text__list__item}>
                                    Variety of tournament  formats: SNG, MTT, Spin &  Go, Knockout, etc.
                                </li>
                                <li className={cls.icmizer_detail_container__info__main__text__list__item}>
                                    Advanced tournament model  FGS + traditional ICM and Chip EV models
                                </li>
                                <li className={cls.icmizer_detail_container__info__main__text__list__item}>
                                    Ability to run ICM calculations early in MTT
                                </li>

                            </ul>
                        </div>
                        <div className={cls.icmizer_detail_container__info__main__screen}>
                            <img src={screenShotIc}   alt={"logo"}/>
                        </div>
                    </div>
                    <div className={cls.icmizer_detail_container__info__btns}>
                        <div className={cls.icmizer_detail_container__info__btns__learn}>
                            Learn more >
                        </div>
                        <button className={cls.icmizer_detail_container__info__btns__demo}>
                            Free trial >
                        </button>
                    </div>
                </div>
            </div>
            <div className={cls.coachers_container}>
                <div  className={cls.postflopizer_detail_container__title}>
                    Your favourite poker coaches use the power of Icmizer and Postflopizer, combined
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
                </div>
            </div>
            <div className={cls.price_container}>
                <div  className={cls.postflopizer_detail_container__title}>
                    Try both products for free
                </div>
                <div className={tog.toggle_container}>
                    <div>Text</div>
                    <ToggleSlider tog={tog}/>
                    <div>Text</div>
                </div>
                <div className={cls.price_container_flex}>
                    <PriceBoard
                        cls={clsSec}
                        clsBtn={clsSec.price_item__btn}
                        clsBtnCont={clsSec.price_item__container_btn}
                        clsLi={clsSec.price_item__list__item}
                        clsBorder={clsSec.price_item}
                        clsHead={clsSec.price_item__header}
                        title={contentFree.title}
                        li1={contentFree.li1}
                        li2={contentFree.li2}
                        price={contentFree.price}
                        btn={contentFree.btn} />
                    <PriceBoard
                        cls={clsSec}
                        clsBtn={clsSec.price_item__btn}
                        clsBtnCont={clsSec.price_item__container_btn}
                        clsLi={clsSec.price_item__list__item}
                        clsBorder={clsSec.price_item}
                        clsHead={clsSec.price_item__header}
                        title={contentFreeSec.title}
                        li1={contentFreeSec.li1}
                        li2={contentFreeSec.li2}
                        price={contentFreeSec.price}
                        btn={contentFreeSec.btn} />
{/*                    <div className={cls.price_item}>
                       <div className={cls.price_item__header}></div>
                        <div className={cls.price_item__title}>
                            Postflopizer Free Trial
                        </div>
                            <ul className={cls.price_item__list}>
                                <li className={cls.price_item__list__item}>Great way to explore the features</li>
                                <li className={cls.price_item__list__item}>All tools except flop editing</li>
                                <li className={cls.price_item__list__item}>Early bird price for the full version</li>
                                <li className={cls.price_item__list__item}>One-time purchase model</li>
                            </ul>
                        <div className={cls.price_item__price}>
                            $0
                        </div>
                        <div className={cls.price_item__container_btn}>
                            <button className={cls.price_item__btn} >
                                Get your Demo
                            </button>
                        </div>
                    </div>
                    <div className={cls.price_item__icm}>
                        <div className={cls.price_item__icm__header}></div>
                        <div className={cls.price_item__icm__title}>
                            Icmizer Free Trial
                        </div>
                        <ul className={cls.price_item__icm__list}>
                            <li className={cls.price_item__icm__list__item}>Free 7-day trial</li>
                            <li className={cls.price_item__icm__list__item}>3-in-1 package: Icmizer, MTT Coach and Replayer</li>
                            <li className={cls.price_item__icm__list__item}>Free 7-day trial</li>
                            <li className={cls.price_item__icm__list__item}>Subscription model</li>
                        </ul>
                        <div className={cls.price_item__icm__price}>
                            $0
                        </div>
                        <div className={cls.price_item__icm__container_btn}>
                            <button className={cls.price_item__icm__btn} >
                                Get your Trial Version
                            </button>
                        </div>
                    </div>*/}
                </div>
            </div>
            <div className={cls.info_btn_container}>
                    More packages and pricing options >>
            </div>
            <CeoStatement author={ceo.author} btn={ceo.btn} text={ceo.text} cls={cls}/>
        </div>
    );
}