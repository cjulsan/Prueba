
import React from 'react';
import './App.css'
import Tiempo from './component/tiempo';
import Historial from './component/historial';
import Noticias from './component/noticias';
import React, {useState} from 'react';
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

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
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button onClick={() => Noticias}>Consultar Noticias</Button>
          <Button onClick={() => Tiempo}>Consultar Tiempo</Button>
          <Button onClick={() => Historial}>Historial</Button>
          </ButtonGroup>

      </div>
    </div>
  )
};

const Parent:React.FC = () => {
  const [parentName, setParentName] = useState<string>('Mr John Obi');
  const updateName = (name: string):void => {
       setParentName(name)
  }
  return (
       <div>
         <FirstChild name={parentName} updateName={updateName} />
         <SecondChild name={parentName} updateName={updateName} />
         <ThirdChild name={parentName} updateName={updateName} />
      </div>
  )
  }

export default App;