
import Tiempo from './tiempo';
import Historial from './historial';
import Noticias from './noticias';
import { Button, ButtonGroup, TextField, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {

    return (
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
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/hola-mundo">Hello</Link>
                    </li>
                </ul>
            </nav>

        </div>

    )
};
export default Menu;