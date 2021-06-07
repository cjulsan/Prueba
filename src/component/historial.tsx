import { JsxElement } from "typescript";
import React from 'react';
import form, { Button } from '@material-ui/core';




function Historial(): JSX.Element {

    return (
        
            <form>
            <p>Nombre: <input type="text" name="nombre" size="40"></p>


            <Button variant="contained" color="primary">
                     Consultar
           </Button>
           </form>
          
      );
}

export default Historial;