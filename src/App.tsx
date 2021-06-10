
import './App.css'
import Historial from './component/historial';
import Noticias from './component/noticias';
import Tiempo from './component/tiempo';
import { BrowserRouter, Route} from "react-router-dom";


function App(){      
  return(
    <div>
      aplicacion
        <BrowserRouter>
          <div>
           <Route path="/component/tiempo" component={Tiempo}/>
           <Route path="/component/noticias" component={Noticias}/>
           <Route path="/component/historial" component={Historial}/> 
           </div>       
         </BrowserRouter>      
      </div>    
  )    
};
export default App;
