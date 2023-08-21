import {NavLink} from "react-router-dom";

const tab = [
    {
        title:'Strategy Editor',
        path:'/submainone'
    },
    {
        title:'Quick Start Mode',
        path:'/submaintwo'

    },
    {
        title:'Tree Preview',
        path:'/submainthree'

    },
    {
        title:'Decision Matrix View',
        path:'/submainfour'

    },
    {
        title:'4 More View Modes',
        path:'/submainfive'

    },
    {
        title:'Tabs and History',
        path:'/submainsix'

    },
    {
        title:'Calculations Queue',
        path:'/submainseven'

    },
]


export const Tabs = ({ clsTabs }) => {

    return (
      <div className={clsTabs.tabs_container}>
          {tab.map((item) => (
              <NavLink to={item.path} className={({isActive}) =>`${isActive ? clsTabs.tab_item__active : clsTabs.tab_item}`}>

                  {item.title}

              </NavLink>
          ))}
      </div>
  )
}