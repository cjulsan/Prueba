
import React from 'react';
import './App.css' 
import Tiempo  from './component/tiempo';
import Historial from './component/historial';
import  {Button} from '@material-ui/core';



function App():JSX.Element{
  return(
    <Button variant="contained" color="primary">
    Hola Mundo!
  </Button>
  )
};

export default App;