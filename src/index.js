//Parte1 informacion del curso
//EJERCICOS 1.3.-1.4
//PASOS 3,4
import React from 'react';
import ReactDOM from 'react-dom';
const Header= (props)=>{
	return(
		<>
			<h1> {props.course} </h1>
		</>
		)
}
const Content=(props)=>{
	console.log(props)
	return(
	<>
		<p> {props.Parts[0].name} Ejercicios {props.Parts[0].excer} </p>
		<p> {props.Parts[1].name} Ejercicios {props.Parts[1].excer} </p>
		<p> {props.Parts[2].name} Ejercicios {props.Parts[2].excer} </p>
		

	</>
	)
}
const Total=(props) =>{
	return(
			<p>Total de Ejercicios {props.Parts[0].excer+props.Parts[1].excer+props.Parts[2].excer}</p>
			)
	

}
const App = () => {
  const course = 'Half Stack application development'
  const Parts=[
{
  	name:'Fundamentals of React',
    excer: 10
},
{
  	name: 'Using props to pass data',
    excer:  7
},
{
  	name: 'State of a component',
    excer: 14
}
]
 

  return (
    <div>
      <Header course={course}/>
      <Content Parts={Parts} />
      <Total Parts={Parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

