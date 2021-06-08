import { JsxElement } from "typescript";
import React, {useState, useEffect} from 'react';

function Tiempo():JSX.Element {
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=0cab44a0fbf8250e98acea9b1b6be75d&lang={es}'
  const [todos, setTodos] = useState<any>() 
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  
   useEffect(() => {
   fetchApi()
  },[])

  return (
    <div className="App">
       En construccón
    </div>
    )   
};

export default Tiempo; 