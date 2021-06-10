
import './App.css'
import Historial from './component/historial';
import Noticias from './component/noticias';
import Tiempo from './component/tiempo';
import { BrowserRouter, Route, Link} from "react-router-dom";
import { Button, ButtonGroup } from '@material-ui/core';
import { Fragment } from 'react';


function App(){
   
  return (
    <div>
      <BrowserRouter>
        <div> <Fragment>
          <Route path="/tiempo" component={Tiempo} />
          <Route path="/noticias" component={Noticias} />
          <Route path="/historial" component={Historial} />
        </Fragment>
        </div>
        <div><Fragment>
          <li><Link to ="/noticias"> Consultar Noticias</Link></li>
          <li><Link to ="/tiempo"> Consultar Tiempo</Link></li>
          <li><Link to ="/historial"> Historial</Link></li>
        </Fragment>
       </div>
      </BrowserRouter>
    </div>
  );
}
export default App();
