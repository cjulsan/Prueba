import './App.css'
import Tiempo from './component/tiempo';
import Historial from './component/historial';
import Noticias from './component/noticias';
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

function Menu(){

 return(
    <div className="App">
    <div>
      Aplicacion 
    </div>
    <div>
      <form>
        <TextField id="Ciudad" label="Ciudad" variant="filled" color="primary" background-Color="gray" />
      </form>

    </div>
    <div className="centrado">
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button onClick={() => Noticias}>Consultar Noticias</Button>
        <Button onClick={() => Tiempo}>Consultar Tiempo</Button>
        <Button onClick={() => Historial}>Historial</Button>
        </ButtonGroup>

    </div>
  </div>
) 
};
export default Menu;