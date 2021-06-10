
import React, {useState, useEffect} from 'react';

function Noticias(){
    const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-06-07&sortBy=popularity&apiKey=b2bde28931674dd487a420630d512fc3'
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
      <h3>NOTICIAS</h3>
    </div>
  );
}

export default Noticias;