import {Route, BrowserRouter, Routes} from "react-router-dom"
import Inicio from "./components/Inicio/Inicio";


function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element = {<Inicio/>}/>

      </Routes>
    
    </BrowserRouter>
      
      


  );
}

export default App;
