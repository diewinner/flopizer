import screenVideo from '../../assets/img/screenVideo.jpg'
import clsContFooter from '../../assets/styles/components/subMain/contentFooter.module.scss'

export const ContentFooter = ({ title, text}) => {
  return (
      <div className={clsContFooter.footer_container}>
              <div className={clsContFooter.demo_container}>
                  <div className={clsContFooter.demo_text}>
                      <div className={clsContFooter.demo_text__title}>{title}</div>
                      <div className={clsContFooter.demo_text__item}>{text}</div>
                  </div>
                  <div className={clsContFooter.footer_btn_demo}>
                      <button>
                          Free Demo
                      </button>
                  </div>
              </div>
              <div className={clsContFooter.footer_content}>
                <div className={clsContFooter.footer_title}>
                  Witness the Strategy Editor in action with Mike Wasserman as your guide
                </div>
                <div className={clsContFooter.footer_video}>
                    <img src={screenVideo} alt={'Video'}/>
                </div>
              </div>
                <div className={clsContFooter.footer_btn}>
                    <button>
                      Free Demo
                    </button>
                </div>
      </div>
  )
}