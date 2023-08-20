import { Route, Routes} from "react-router-dom";
import {SubMainThree} from "./page/subMainThree";
import {SubMainTwo} from "./page/subMainTwo";
import {SubMainOne} from "./page/subMainOne";
import {MainSec} from "./page/mainSec";
import {Main} from "./page/main";
import {SubMainFour} from "./page/subMainFour";
import {SubMainFive} from "./page/subMainFive";
import {SubMainSix} from "./page/subMainSix";
import {SubMainSeven} from "./page/subMainSeven";
import cls from './assets/styles/main.module.scss';
import clsSec from './assets/styles/mainSec.module.scss';

function App() {
  return (
  <Routes>
          <Route  path='/'  element=<Main cls={cls}/> />
          <Route  path='/mainsec'  element=<MainSec cls={clsSec}/> />
          <Route  path='/submainone'  element=<SubMainOne cls={cls}/> />
          <Route  path='/submaintwo'  element=<SubMainTwo cls={cls}/> />
          <Route  path='/submainthree'  element=<SubMainThree cls={cls}/> />
          <Route  path='/submainfour'  element=<SubMainFour cls={cls}/> />
          <Route  path='/submainfive'  element=<SubMainFive cls={cls}/> />
          <Route  path='/submainsix'  element=<SubMainSix cls={cls}/> />
          <Route  path='/submainseven'  element=<SubMainSeven cls={cls}/> />
  </Routes>
  );
}

export default App;
