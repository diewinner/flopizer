import screenVideo from '../../assets/img/screenVideo.jpg'

export const ContentFooter = ({clsContFooter}) => {
  return (
      <div className={clsContFooter.footer_container}>
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