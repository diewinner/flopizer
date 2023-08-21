import React from "react";

export const PriceBoard = ({cls,title,li1,li2,li3,price,priceOld,btn,info, clsBtn, clsLi, clsBorder, clsHead}) => {
  return (
      <div className={clsBorder}>
              <div className={clsHead}></div>
                <div className={cls.price_item__content}>
                    <div className={cls.price_item__title}>
                        {title}
                    </div>
                    <ul className={cls.price_item__list}>
                        <li className={clsLi}>{li1}</li>
                        <li className={clsLi}>{li2}</li>
                        <li className={clsLi}>{li3}</li>
                    </ul>
                    <div className={cls.price_item__icm__price}>
                        <span className={cls.price_item__icm__price__true}>{priceOld}</span>

                        <span className={cls.price_item__icm__price__sale}>{' ' + price}</span>
                        <div className={cls.price_item__icm__price__time}>
                            {info}
                        </div>
                    </div>
                    <div className={cls.price_item__container_btn}>
                        <button className={clsBtn}>
                            {btn}
                        </button>
                    </div>
                </div>
      </div>
  )
}