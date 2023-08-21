import { Route, Routes} from "react-router-dom";
import {SubMainThree} from "./page/subMainPages/subMainThree";
import {SubMainTwo} from "./page/subMainPages/subMainTwo";
import {SubMainOne} from "./page/subMainPages/subMainOne";
import {MainSec} from "./page/mainPages/mainSec";
import {Main} from "./page/mainPages/main";
import {SubMainFour} from "./page/subMainPages/subMainFour";
import {SubMainFive} from "./page/subMainPages/subMainFive";
import {SubMainSix} from "./page/subMainPages/subMainSix";
import {SubMainSeven} from "./page/subMainPages/subMainSeven";
import cls from './assets/styles/main.module.scss';
import clsSec from './assets/styles/mainSec.module.scss';
import clsSubMain from './assets/styles/subMain.module.scss'
import clsTabs from './assets/styles/components/subMain/tabs.module.scss'
import clsHead from './assets/styles/components/subMain/headTitle.module.scss'
import clsContHead from './assets/styles/components/subMain/contentTitle.module.scss'
import clsContFooter from './assets/styles/components/subMain/contentFooter.module.scss'


function App() {
  return (
  <Routes>
          <Route  path='/'  element=<Main cls={cls}/> />
          <Route  path='/mainsec'  element=<MainSec cls={clsSec}/> />
          <Route  path='/submainone'  element=<SubMainOne clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submaintwo'  element=<SubMainTwo clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submainthree'  element=<SubMainThree clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submainfour'  element=<SubMainFour clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submainfive'  element=<SubMainFive clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submainsix'  element=<SubMainSix clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs } clsHead={clsHead} cls={clsSubMain}/> />
          <Route  path='/submainseven'  element=<SubMainSeven clsContFooter={clsContFooter} clsContHead={clsContHead} clsTabs={clsTabs} clsHead={clsHead} cls={clsSubMain}/> />
  </Routes>
  );
}

export default App;
