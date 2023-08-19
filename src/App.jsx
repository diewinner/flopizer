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
import './assets/styles/main.scss'
function App() {
  return (
  <Routes>
          <Route  path='/'  element=<Main/> />
          <Route  path='/mainsec'  element=<MainSec/> />
          <Route  path='/submainone'  element=<SubMainOne/> />
          <Route  path='/submaintwo'  element=<SubMainTwo/> />
          <Route  path='/submainthree'  element=<SubMainThree/> />
          <Route  path='/submainfour'  element=<SubMainFour/> />
          <Route  path='/submainfive'  element=<SubMainFive/> />
          <Route  path='/submainsix'  element=<SubMainSix/> />
          <Route  path='/submainseven'  element=<SubMainSeven/> />
  </Routes>
  );
}

export default App;
