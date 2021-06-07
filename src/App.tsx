
import React from 'react';
import './App.css' 
import Tiempo  from './component/tiempo';
import Historial from './component/historial';
import  {Button, Menu} from '@material-ui/core';



function App():JSX.Element{
  return(
   <div>
    <div> 
        <Tiempo/>
        </div>
       <div>
       <Button variant="contained" color="primary">
        Hola Mundo!
      </Button>
      </div> 
   </div> 
  )
};

export default App;