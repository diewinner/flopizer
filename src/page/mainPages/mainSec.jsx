import React, {useState} from "react";
import Cube from '../../assets/img/Cube.jpg'
import firstChild from "../../assets/img/firstChild.jpg";
import secChild from "../../assets/img/secChild.jpg";
import {PriceBoard} from "../../components/main/priceBoard";
import {CeoStatement} from "../../components/main/ceoStatement";
import {Caruselitem1} from "../../components/main/caruselitems/caruselitem1";
import {Caruselitem2} from "../../components/main/caruselitems/caruselitem2";
import {Caruselitem3} from "../../components/main/caruselitems/caruselitem3";
import {Caruselitem4} from "../../components/main/caruselitems/caruselitem4";
import ToggleSlider from "../../components/main/toggle";
import tog from '../../assets/styles/components/main/toggle.module.scss'
import cls from '../../assets/styles/mainSec.module.scss';

export const MainSec = () => {
    const [btn,setBtn] = useState('item1')
    const contentPrice =
        {
            title:"Pro",
            li1:"Full version",
            li2:"All features included",
            li3:"More features yet to come",
            price:"6",
            btn:"Standard Pack",
            guest:"*with guest users",
            timePrice:"MONTH",
            slash: '/',
            user:"USER"
        }

    const contentFree =
        {
            title:"Free",
            li1:"Great way to explore",
            li2:"Great way to explore",
            price:"0",
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
                <div className={cls.m_title_container__img__container}>
                    <div className={cls.m_title_container__img__container__item}>
                        <img src={Cube} alt={'Cube'}/>
                    </div>
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
                    <div className={cls.carusel_btns_wrapper}>
                    <button onClick={() => {
                        setBtn('item1');
                    }} className={btn === 'item1' ? cls.carusel_btns_wrapper__item__active : cls.carusel_btns_wrapper__item}>
                        Lorem
                    </button>
                    <button onClick={() => {
                        setBtn('item2')
                    }} className={btn === 'item2' ? cls.carusel_btns_wrapper__item__active : cls.carusel_btns_wrapper__item}>Ipsum
                    </button>
                    <button onClick={() => {
                        setBtn('item3')
                    }} className={btn === 'item3' ? cls.carusel_btns_wrapper__item__active : cls.carusel_btns_wrapper__item}>
                        Lorem
                    </button>
                    <button onClick={() => {
                        setBtn('item4')
                    }} className={btn === 'item4' ? cls.carusel_btns_wrapper__item__active : cls.carusel_btns_wrapper__item}>
                        Ipsum
                    </button>
                    </div>
                <div>
                    {btn === 'item1' && <Caruselitem1 />}
                    {btn === 'item2' && <Caruselitem2 />}
                    {btn === 'item3' && <Caruselitem3 />}
                    {btn === 'item4' && <Caruselitem4 />}
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
                                <span>Intuitive</span> <br/> interface
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
                            <div className={cls.skills_item__title__other}>
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
                <div className={cls.price_title_container}>
                    <div className={cls.price_title}>
                        Fair prices for fair play
                    </div>
                    <div className={tog.toggle_container}>
                        <div>Text</div>
                        <ToggleSlider />
                        <div>Text</div>
                    </div>
                </div>
                <div>
                    <div className={cls.price_container_flex}>
                        <PriceBoard
                            title={contentFree.title}
                            li1={contentFree.li1}
                            li2={contentFree.li2}
                            price={contentFree.price}
                            btn={contentFree.btn} />
                        <PriceBoard
                            title={contentPrice.title}
                            li1={contentPrice.li1}
                            li2={contentPrice.li2}
                            price={contentPrice.price}
                            btn={contentPrice.btn}
                            guest={contentPrice.guest}
                            timePrice={contentPrice.timePrice}
                            slash={contentPrice.slash}
                        />
                        <PriceBoard
                            title={contentPrice.title}
                            li1={contentPrice.li1}
                            li2={contentPrice.li2}
                            price={contentPrice.price}
                            btn={contentPrice.btn}
                            timePrice={contentPrice.timePrice}
                            slash={contentPrice.slash}
                            user={contentPrice.user}
                        />
                    </div>
                </div>
            </div>
            <CeoStatement text={ceo.text} author={ceo.author} btn={ceo.btn} />
        </div>
    )
}