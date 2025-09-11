import  './App.css';
import { useState } from 'react';




function App() {
     const [age,setAge] = useState(0);
     const increaseAge=()=>{
      setAge(age+1  );
     };

  return (
    <div>
    {age}
   <button onClick={increaseAge}>increase age</button>


    </div>
    
    

);


}

export default App;
