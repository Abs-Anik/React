import { useState } from 'react';
import './App.css';
import User from './User';
import { Person } from './Person';
import Village from './Village';

function App() {
  let data = "Anik";
  function apple() {
    data = "Md. Abu Bakkar Siddik";
    alert(data);
  }
  let [value, setValue] = useState("Test");
  let [sum, setSum] = useState(0);
  function updateData() {
    setValue("Lorem Ipsum");
    console.log('.............');
    setSum(sum + 1);
  }

  return (
    <div className="App">
      <h1>Hello {data} </h1>
      <h2>{value} = {sum} </h2>
      <Person />
      <Village />
      <Education />
      <User />
      <button onClick={apple}>Click Me</button>
      <button onClick={() => apple()}>React New</button>
      <button onClick={() => alert("React")}>React</button>
      <button onClick={updateData}>Functional State</button>
    </div>
  );
}

//Same file component

const Education = () => {
  return (
    <>
      <p>My Varsity Name is Daffodil International University From Functional Component</p>
      <p>My Batch: 43<sup>rd</sup></p>
    </>
  )
}

export default App;
