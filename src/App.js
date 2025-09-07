import './App.css';
function App() {
 
  

  return (
    
    <div className="App">
     <div>
    <User name="gapu" age={25}/>
    <User name="ansh" age={21} />
    </div>

    </div>

);

}

const User = (props)=>{   // thsi is  a component not fn and start from capital letters only
  return (
<div>
      <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    </div>
    
  );
}

export default App;
