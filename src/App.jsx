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


function App() {
    return (
  <Routes>

          <Route  path='/'  element=<Main /> />
          <Route  path='/mainsec'  element=<MainSec /> />
          <Route  path='/submainone'  element=<SubMainOne  /> />
          <Route  path='/submaintwo'  element=<SubMainTwo  /> />
          <Route  path='/submainthree'  element=<SubMainThree  /> />
          <Route  path='/submainfour'  element=<SubMainFour  /> />
          <Route  path='/submainfive'  element=<SubMainFive  /> />
          <Route  path='/submainsix'  element=<SubMainSix  /> />
          <Route  path='/submainseven'  element=<SubMainSeven  /> />
  </Routes>
  );
}

export default App;
