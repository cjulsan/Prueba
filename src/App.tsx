
import React from 'react';
import './App.css'
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Historial from './component/historial';
import Noticias from './component/noticias';
import Tiempo from './component/tiempo';

function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        Aplicacion
            </div>
      <div>
      <form action="/my-handling-form-page" method="post">
          <ul>
            <li>
              <label> Ciudad </label>
              <input type="text" id="name" name="user_name" />
            </li>
           </ul>
         </form>
      </div>
      <div className="centrado">
        
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={() => <Noticias/>}>Consultar Noticias</Button>
            <Button onClick={() => <Tiempo/>}>Consultar Tiempo</Button>
            <Button onClick={() => <Historial/>}>Historial</Button>
          </ButtonGroup>
      </div>
      </div>
  )
};
export default App;
