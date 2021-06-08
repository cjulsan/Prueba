
import React from 'react';
import './App.css'
import Tiempo from './component/tiempo';
import Historial from './component/historial';
import Noticias from './component/noticias';
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {classes, value, setValue} from '@material-ui/core'
function App(): JSX.Element {
  return (
    <div className="App">
      <div>
        <Tiempo />
        <Historial />
      </div>
      <div>
        <form>
          <TextField id="Ciudad" label="Ciudad" variant="filled" color="primary" background-Color="gray" />
        </form>

      </div>
      <div className="centrado">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Noticias" icon={<Noticias />} />
          <BottomNavigationAction label="Tiempo" icon={<Tiempo />} />
          <BottomNavigationAction label="Historial" icon={<Historial />} />
        </BottomNavigation>
   
      </div>
    </div>
  )
};

export default App;