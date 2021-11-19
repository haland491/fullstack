//Parte1 informacion del curso
//EJERCICOS 1.1.-1.2
//PASO 1 Y 2
import React from 'react';
import ReactDOM from 'react-dom';
	return(
		<>
			<h1>{props.course}</h1>
		</>
		)
}
const Content=(props)=>{
	console.log(props)
	return(
	<>
		<Part1  nomparte={props.part1} numero={props.exercises1}/>
		<Part2  nomparte={props.part2} numero={props.exercises2}/>
		<Part3  nomparte={props.part3} numero={props.exercises3}/>

		
	</>
	)
}
const Total=(props)=>{
	return(
		<>
			<p> Total de Ejercicios {props.total}</p>
		</>
		)
}
const Part1=(props)=>{
	return(
		<>
			<p>{props.nomparte}   {props.numero} Ejercicios</p>
		</>
		)

}
const Part2=(props)=>{
	return(
		<>
			<p>{props.nomparte}   {props.numero} Ejercicios</p>
		</>
			)
}
const Part3=(props)=>{
	return(
		<>
			<p>{props.nomparte}   {props.numero}  Ejercicios</p>
		</>
	)
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total=exercises1+exercises2+exercises3

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1}
      		   part2={part2} exercises2={exercises2}
      		   part3={part3} exercises3={exercises3}/>
      <Total total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

