export const ContentTitle = ({ title,subtitle, clsContHead }) => {
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