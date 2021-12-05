// unicafe parte1
//Aplicacion final
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({handevent,text})=>(<button onClick={handevent}>{text}
      </button>
     )
const Stadistics=(props)=>{
  console.log(props)
  if(props.allCliks===0){
    return(
      <div>
        <h1> No hay Estadisticas aun</h1>
      </div>
      )
  }

  const Prompun=(props.bueno-props.malo)/props.allCliks*100
  const Porcomen=(props.bueno/props.allCliks)*100

   return(
    <div>
      <h1> Stadistics</h1>
      <tr>
        <td>Bueno</td>
        <td>{props.bueno}</td>
      </tr>
      <tr>
        <td>Neutro</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Malo </td>
        <td>{props.malo}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{props.allCliks}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{Prompun}</td>
      </tr>
      <tr>
        <td>Aceptacion</td>
        <td>{Porcomen}</td>
      </tr>
    </div>
     )
 
}


const App = () => {
  const [good, setGood ] = useState(0)
  const [neutral, setNet] = useState(0)
  const [bad,setbad]= useState(0)
  const [allCliks,setAllclicks]=useState(0)
   

  const handlegood=()=>{
      setGood(good+1)
      setAllclicks(allCliks+ 1)
  }
  
  const handlernet=()=>{
    setNet(neutral+1)
    setAllclicks(allCliks+1)
  }
 
  const hanlerbad=()=>{
    setbad(bad+1)
    setAllclicks(allCliks+1)
  }
  
 
  return (

    <div>
      <h1> give feedback</h1>
      <Button handevent={handlegood} text='good'/>
      <Button handevent={handlernet} text='neutral'/>
      <Button handevent={hanlerbad} text='bad'/>
      <Stadistics bueno={good} neutral={neutral} malo={bad} allCliks={allCliks}/>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))









