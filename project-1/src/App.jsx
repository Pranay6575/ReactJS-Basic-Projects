import "./App.css"; // global css
import Herosection from "./components/Herosection";
import Navigation from "./components/Navigation";


const App = () => {
  return <div>
    <div>
       <Navigation /> 
       <Herosection />  
    </div>
  </div>;
};

export default App;