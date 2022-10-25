import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import FoodItemsList from './components/foodItemList/FoodItemsList';

function App() {

  const [validInput, setValidInput] = useState(true);

  const displayWarning = () => {
    setValidInput(false);
    setTimeout(()=> setValidInput(true),5000);
  }

  return (
    <div className="App">
      <Navbar />
      {validInput ? null:<h2 className='text-danger text-center'>Please check to see that all your inputs are valid!</h2>}
        <div className="container">
          <Form displayWarning={displayWarning}/>
        </div>
        <div className="container">
           <FoodItemsList />
        </div>
    </div>
  );
}

export default App;
