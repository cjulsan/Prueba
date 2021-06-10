
import {Button, ButtonGroup} from '@material-ui/core';

export const Navegacion = (props:any) => {

    var history= props;
    
    return(
      <div>

      <ButtonGroup disableElevation variant="contained" color="primary">
      <Button onClick={() => history.push('/noticias')}>Consultar Noticias</Button>
      <Button onClick={() => history.push('/Tiempo')}>Consultar Tiempo</Button>
      <Button onClick={() => history.push('/Historial')}>Historial</Button>
      </ButtonGroup>

      </div>    
        
   )
};
