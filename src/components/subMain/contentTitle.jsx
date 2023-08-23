
import clsContHead from '../../assets/styles/components/subMain/contentTitle.module.scss'


export const ContentTitle = ({ title,subtitle }) => {
  return (
      <div className={clsContHead.content_head_container}>
          <div className={clsContHead.content_title}>
              {title}
          </div>
          <div className={clsContHead.content_subtitle}>
              {subtitle}
          </div>
      </div>
  )
}