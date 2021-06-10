
import './App.css'
import Historial from './component/historial';
import Noticias from './component/noticias';
import Tiempo from './component/tiempo';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import  React from 'react';

function App() {

  return (
    <div>
       <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/tiempo" component={Tiempo} />
          <Route path="/noticias" component={Noticias} />
          <Route path="/historial" component={Historial} />
        </Switch>
      </BrowserRouter>     
      <ul>
      <li><Link to="/noticias"> Consultar Noticias</Link></li>
      <li><Link to="/tiempo"> Consultar Tiempo</Link></li>
      <li><Link to="/historial"> Historial</Link></li>
      </ul>
      </React.Fragment> 
    </div>
  );
};
export default App;


