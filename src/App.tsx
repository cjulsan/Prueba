
import React from 'react';
import './App.css'
import Noticias from './component/noticias';
import Tiempo from './component/tiempo';
import Historial from './component/historial';
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';


function App(): JSX.Element {
  return (
    <div className="App">
            <div>
                Aplicacion
            </div>
            <div>
                <form>
                    <TextField id="Ciudad" label="Ciudad" variant="filled" color="primary"/>
                </form>

            </div>
            <div className="centrado">
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={() => "Noticias.html"}>Consultar Noticias</Button>
                    <Button onClick={() => "Tiempo.html"}>Consultar Tiempo</Button>
                    <Button onClick={() => "Historial.html"}>Historial</Button>
                </ButtonGroup>
            </div>
        </div>
  )
};
export default App;
