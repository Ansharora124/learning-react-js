import  './App.css';
const age=55;
const isGreen=false;


function App() {
 
  
  return (
    
    <div className="App">
    {age>=18 ? <h1>adult </h1> : <h1>underage</h1>}
 <h1 style={{color:isGreen ? "green": "red"}}>this is color </h1>
    </div>

);


}


    


export default App;
