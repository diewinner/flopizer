const tab = [
    {
        title:'Strategy Editor'
    },
    {
        title:'Quick Start Mode'
    },
    {
        title:'Tree Preview'
    },
    {
        title:'Decision Matrix View'
    },
    {
        title:'4 More View Modes'
    },
    {
        title:'Tabs and History'
    },
    {
        title:'Calculations Queue'
    },
]
export const Tabs = ({ clsTabs }) => {
  return (
      <div className={clsTabs.tabs_container}>
          {tab.map((item) => (
              <div className={clsTabs.tab_item}>
                  {item.title}
              </div>
          ))}
      </div>
  )
}