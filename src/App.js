import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import FoodItemsList from './components/foodItemList/FoodItemsList';

function App() {

  const [validInput, setValidInput] = useState(true);

  const [foods, setFoods] = useState([]);

  const displayWarning = () => {
    setValidInput(false);
    setTimeout(()=> setValidInput(true),5000);
  }

  const addFoodHandler = (eFood, eCals, eTime) =>{
    setFoods((prevState)=>{
      return [...prevState, {food: eFood, calories: eCals, time: eTime}];
    })
  }

  return (
    <div className="App">
      <Navbar />
      {validInput ? null:<h2 className='text-danger text-center'>Please check to see that all your inputs are valid!</h2>}
        <div className="container">
          <Form displayWarning={displayWarning} addFoodHandler={addFoodHandler}/>
        </div>
        <div className="container">
           <FoodItemsList foods={foods}/>
        </div>
    </div>
  );
}

export default App;
