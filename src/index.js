  //Parte1 Anecdotes
//  Aplicacion final
  import React, {useState} from 'react'
  import ReactDOM from 'react-dom'

  const History=(props)=>{
    console.log(props)
    const sum=props.points.reduce(function(acc,elemento){
    return acc+=elemento
     })
    if(sum===0){
      return(
        <>
          <p>  No hay votaciones aun </p>

        </>
      )
      }
    const mayor=()=>{
      var mayorAnec=0
      for (var i = 0; i < props.points.length; i++) {
        if(props.points[i]>mayorAnec) mayorAnec=props.points[i]
        }
        return  props.points.indexOf(mayorAnec)
     }
       

  return(
    <>
      <h1> Anecdota mas votada </h1>
      <p> {anecdotes[mayor()]}</p>
      <p> Con {props.points[mayor()]} Votes</p> 
      
    </>
    )
}
  
  const App=(props)=>{
    
    const long=props.anecdotes.length
    const [selected, setSelected]= useState(0)
    var [points, setPoints]=useState(Array(long).fill(0))
    
    
    const handlier=()=>{
     setSelected(Math.floor(Math.random()*long))
    }
    const handlierVotes=()=>{
      const copy=[...points]
      copy[selected]+=1
      setPoints(copy)
      }
    console.log(selected)
    //console.log(points)
       
    
    return (
      <div>
          <h1> Anecdota del dia</h1>
          <p>{props.anecdotes[selected]}</p>
          <p> Has {points[selected]} votes</p>
          <button onClick={handlierVotes}>vote
          </button>
          <button onClick={handlier}> next anecdotes
          </button>
          <History anecdotes={anecdotes} points={points}/>
      </div>
    )


  }

  const anecdotes=[
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'the first 90 percent of de code accounts for the first 90 percent of the development time...the ramaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    ReactDOM.render(
      <App anecdotes={anecdotes}/>, 
    document.getElementById('root'))
                          