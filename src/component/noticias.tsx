
import React, {useState, useEffect} from 'react';


function Noticias(){
    const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-06-07&sortBy=popularity&apiKey=b2bde28931674dd487a420630d512fc3'
  const [dato, setDatos] = useState<any>() 
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setDatos(responseJSON)
  }
  
   useEffect(() => {
   fetchApi()
  },[])
  console.log(dato.name);
  return (
    <div className="App">      
  
    </div>
  );
}

export default Noticias;