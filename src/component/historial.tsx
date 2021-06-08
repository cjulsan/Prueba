import { JsxElement } from "typescript";
import React from 'react';
import {Button} from '@material-ui/core';

function Historial():JSX.Element {

    return (
        <div>
           <h3>HISTORIAL</h3>
           <Button href="index.html">Consultar Noticias</Button>
        </div>
      )
};
export default Historial;