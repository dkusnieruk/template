import { useState, useEffect } from "react";


function App  ()  {

  const [count, setCount] = useState(0);
  const [student ,setStudent] = useState({name:'John', age:25})

  const incrementCount =() =>{
    setCount(count +      1);
  }

  const updateStudent =() =>{
    setStudent({
      ...student,
      name:'Andrzej'

    })
  }
  useEffect(() =>{
console.log('Hello from UE');
document.title = `Count :${count}`

  }, [count])

  const [isTrue, setIsTrue] = useState(false)

  const toggle =( ) =>{
    setIsTrue(!isTrue);
  }
 
  return (
    <div
    className="App"
    >
<h2>Hooks - count = {count}</h2>
<h2>Student : {student.name} age : {student.age}</h2>
<h4>Is it true {isTrue ?"Yes" : "No" }</h4>    
    <button onClick={incrementCount}>Count</button>
    <button onClick={updateStudent}>updateStudent</button>
    <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default App