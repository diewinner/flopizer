import React from "react";
import {InfoIcon} from "../../assets/svg/infoIcon";
import cls from '../../assets/styles/mainSec.module.scss';

export const PriceBoard = ({title,li1,li2,li3,price,btn, guest, timePrice, user, slash}) => {
  return (
      <div className={title === 'Free' || title === 'Postflopizer' ? cls.price_item : cls.price_item__icm}>
                <div className={cls.price_item__content__main}>
                    <h3 className={cls.price_item__title}>
                        {title}
                    </h3>
                    <ul className={cls.price_item__list}>
                        <li className={cls.price_item__list__item}>{li1}</li>
                        <li className={cls.price_item__list__item}>{li2}</li>
                        <li className={cls.price_item__list__item}>{li3}</li>
                    </ul>
                    <div className={cls.price_item__icm__price}>
                        $
                        <span className={cls.price_item__icm__price__sale}>{price}</span>
                        <span className={cls.price_item__icm__price__time__slash}>{user ? slash : ''}</span>
                        <span className={cls.price_item__icm__price__time}>{user}</span>
                        <span className={cls.price_item__icm__price__time__slash}>{slash}</span>
                        <span className={cls.price_item__icm__price__time}>{timePrice}</span>
                    </div>
                    <a className={title ==='Free' ? cls.price_item__container_btn : cls.price_item__icm__container_btn}>
                        <span className={cls.price_item__btn}>
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