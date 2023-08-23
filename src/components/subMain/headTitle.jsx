import clsHead from '../../assets/styles/components/subMain/headTitle.module.scss'


export const HeadTitle = () => {
  return (
      <div className={clsHead.head_container}>
        <div className={clsHead.head_title}>
            A variety of tools to elevate your strategy
        </div>
          <div className={clsHead.head_line}></div>
      </div>
  )
}