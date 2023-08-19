import screenShotPost from  '../assets/img/screenShotPostFlopizer.png'
import screenShotIc from  '../assets/img/icmizerScreen.png'
import React from "react";
import firstChild from '../assets/img/firstChild.png'
import secChild from '../assets/img/secChild.png'

export const Main = (props) => {
    return (
        <div className="main_container">

            <div className="m_title_container">
                <div className="m_title_container__text">
                    <div className="m_title_container__text__title">
                        Raise your game
                        <br/>
                        in tournament poker
                    </div>
                    <div className="m_title_container__text__subtitle">
                        Discover Icmizer and Postflopizer GTO Solvers designed to improve your skills on every street
                    </div>
                </div>
                <button className="m_title_container__btn">
                    Try for free
                </button>
            </div>

            <div className="postflopizer_detail_container">
                <div className="postflopizer_detail_container__title">
                    Secure your victories from preflop to the river
                </div>
                <div className="postflopizer_detail_container__info">
                    <div className="postflopizer_detail_container__info__main">
                        <div className="postflopizer_detail_container__info__main__text">
                            <div className="postflopizer_detail_container__info__main__text__title">
                                Brand new tool to craft smart and creative poker strategies
                            </div>
                            <ul className="postflopizer_detail_container__info__main__text__list">
                                <li className="postflopizer_detail_container__info__main__text__list__item">
                                    Postflop Strategy Editor
                                </li>
                                <li className="postflopizer_detail_container__info__main__text__list__item">
                                    Quick Start Mode
                                </li>
                                <li className="postflopizer_detail_container__info__main__text__list__item">
                                    5 Analytical View Modes
                                </li>
                                <li className="postflopizer_detail_container__info__main__text__list__item">
                                    Your History, Saved
                                </li>
                                <li className="postflopizer_detail_container__info__main__text__list__item">
                                    10 minutes to onboard max
                                </li>
                            </ul>
                        </div>
                        <div className="postflopizer_detail_container__info__main__screen">
                            <img src={screenShotPost} style={{width:'100%', height:'100%'}}  alt={"logo"}/>
                        </div>
                    </div>
                    <div className="postflopizer_detail_container__info__btns">
                        <div className="postflopizer_detail_container__info__btns__learn">
                            Learn more >
                        </div>
                        <button className="postflopizer_detail_container__info__btns__demo">
                            Free demo >
                        </button>
                    </div>
                </div>
            </div>

            <div className="icmizer_detail_container">

                <div className="icmizer_detail_container__info">
                    <div className="icmizer_detail_container__info__main">
                        <div className="icmizer_detail_container__info__main__text">
                            <div className="icmizer_detail_container__info__main__text__title">
                                Time-tested preflop solver loved by thousands of poker players                             </div>
                            <ul className="icmizer_detail_container__info__main__text__list">
                                <li className="icmizer_detail_container__info__main__text__list__item">
                                    Variety of tournament  formats: SNG, MTT, Spin &  Go, Knockout, etc.
                                </li>
                                <li className="icmizer_detail_container__info__main__text__list__item">
                                    Advanced tournament model  FGS + traditional ICM and Chip EV models
                                </li>
                                <li className="icmizer_detail_container__info__main__text__list__item">
                                    Ability to run ICM calculations early in MTT
                                </li>

                            </ul>
                        </div>
                        <div className="icmizer_detail_container__info__main__screen">
                            <img src={screenShotIc} style={{width:'100%', height:'100%'}}  alt={"logo"}/>
                        </div>
                    </div>
                    <div className="icmizer_detail_container__info__btns">
                        <div className="icmizer_detail_container__info__btns__learn">
                            Learn more >
                        </div>
                        <button className="icmizer_detail_container__info__btns__demo">
                            Free trial >
                        </button>
                    </div>
                </div>
            </div>
            <div className="coachers_container">
                <div style={{paddingTop:76}} className="postflopizer_detail_container__title">
                    Your favourite poker coaches use the power of Icmizer and Postflopizer, combined
                </div>
                <div className="coachers_list_flex">
                    <div className="coacher_item">
                        <div className="coacher_item__img">
                            <img src={firstChild}  alt={"coacher"}/>
                        </div>
                        <div className="coacher_item__text">
                            <div className="coacher_item__text__quote">“The Strategy Editor feature is a game changer, no doubt.”</div>
                            <div className="coacher_item__text__author">Mike Wasserman, advanced coach</div>
                        </div>
                    </div>
                    <div className="coacher_item">
                        <div className="coacher_item__img">
                            <img src={secChild}  alt={"coacher"}/>
                        </div>
                        <div className="coacher_item__text">
                            <div className="coacher_item__text__quote">“Top tournament tool that I now personally use.”</div>
                            <div className="coacher_item__text__author">Collin Moshman, poker godfather</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}