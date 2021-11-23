//Parte1/courseinfo
//aplicacion final
//
import React from 'react';
import ReactDOM from 'react-dom';
const Header= (props)=>{
	return(
		<>
			<h1> {props.Course.name} </h1>
		</>
		)
}
const Content=(props)=>{
	console.log(props)
	
	return(
	<>
		<p> {props.Course.Parts[0].name} Ejercicios {props.Course.Parts[0].excer} </p>
		<p> {props.Course.Parts[1].name} Ejercicios {props.Course.Parts[1].excer} </p>
		<p> {props.Course.Parts[2].name} Ejercicios {props.Course.Parts[2].excer} </p>
		

	</>
	)
}
const Total=(props) =>{
	var acc=0
	var i=0
		for(i in props.Course.Parts){
			acc=acc+props.Course.Parts[i].excer
			
		}
	
	return(
			<p>Total de Ejercicios es {acc}</p>
			)
	

}
const App = () => {
  const Course = {
  	name:'Half Stack application development',
    Parts:[
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
}


  return (
    <div>
      <Header Course={Course}/>
      <Content Course={Course} />
      <Total Course={Course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

