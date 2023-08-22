import React from "react";
import {InfoIcon} from "../../assets/svg/infoIcon";

export const PriceBoard = ({cls,title,li1,li2,li3,price,btn, clsBtn, clsLi, clsBorder, guest,  clsBtnCont, timePrice, user}) => {
  return (
      <div className={clsBorder}>
                <div className={cls.price_item__content__main}>
                    <h3 className={cls.price_item__title}>
                        {title}
                    </h3>
                    <ul className={cls.price_item__list}>
                        <li className={clsLi}>{li1}</li>
                        <li className={clsLi}>{li2}</li>
                        <li className={clsLi}>{li3}</li>
                    </ul>
                    <div className={cls.price_item__icm__price}>
                        $
                        <span className={cls.price_item__icm__price__sale}>{price}</span>
                        <span className={cls.price_item__icm__price__time}>{user}</span>
                        <span className={cls.price_item__icm__price__time}>{timePrice}</span>
                    </div>
                    <a className={clsBtnCont}>
                        <span className={clsBtn}>
                            {btn}
                        </span>
                    </a>
                </div>
          <div className={cls.price_item__content__info}>
              <ul>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      <span><InfoIcon width={'100%'}/></span>
                      Unlimited users
                  </li>
                  <li>
                      {guest}
                  </li>
              </ul>
          </div>
      </div>
  )
}