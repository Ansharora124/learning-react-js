import  './App.css';
const list=["ansh","gapu","anshgaputi"];

function App() {
     
  return (
    
    <div className="App">
   {list.map((name,key)=>{
    return <h1 key={key}> {name} </h1>;
   })}
    </div>

);


}

export default App;
