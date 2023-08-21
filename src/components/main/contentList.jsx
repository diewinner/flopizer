
export const ContentList = ({cls, title1,title2,title3,title4,text1,text2,text3,text4,screen1,screen2,screen3,screen4}) => {
  return (
      <div className={cls.submain_list}>
          <div className={cls.submain_list__item}>
              <div className={cls.submain_list__item__text}>
                  <div className={cls.submain_list__item__text__title}>{title1}</div>
                  <div className={cls.submain_list__item__text__subtitle}>
                      {text1}
                  </div>
              </div>
              <div className={cls.submain_list__item__img}>
                  <img src={screen1} alt={'screenshot'}/>
              </div>
          </div>
          {screen2 && <div className={cls.submain_list__item}>
              <div className={cls.submain_list__item__img}>
                  <img src={screen2} alt={'screenshot'}/>
              </div>
              <div className={cls.submain_list__item__text}>
                  <div className={cls.submain_list__item__text__title}>{title2}</div>
                  <div className={cls.submain_list__item__text__subtitle}>
                      {text2}
                  </div>
              </div>
          </div>
          }
          {screen3 && <div className={cls.submain_list__item}>
              <div className={cls.submain_list__item__text}>
                  <div className={cls.submain_list__item__text__title}>{title3}</div>
                  <div className={cls.submain_list__item__text__subtitle}>
                      {text3}
                  </div>
              </div>
              <div className={cls.submain_list__item__img}>
                  <img src={screen3} alt={'screenshot'}/>
              </div>
          </div>
          }
          {screen4 && <div className={cls.submain_list__item}>
              <div className={cls.submain_list__item__img}>
                  <img src={screen4} alt={'screenshot'}/>
              </div>
              <div className={cls.submain_list__item__text}>
                  <div className={cls.submain_list__item__text__title}>{title4}</div>
                  <div className={cls.submain_list__item__text__subtitle}>
                      {text4}
                  </div>
              </div>
          </div>
          }
      </div>
  )
}