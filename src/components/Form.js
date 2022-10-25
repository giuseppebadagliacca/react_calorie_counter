import React, { useState } from 'react'


function Form(props) {
  const [foodInput, setFoodInput] = useState('');
  const [calorieInput, setCalorieInput] = useState('');
  const [timeInput, setTimeInput] = useState('');

  const foodOnChangeHandler = (e) => {
    setFoodInput(e.target.value);
  }
  const calorieOnChangeHandler = (e) => {
    setCalorieInput(e.target.value);
  }
  const timeOnChangeHandler = (e) => {
    setTimeInput(e.target.value);
  }


  const validateAndSubmitInput = (e) =>{
    e.preventDefault();
    if(foodInput === '' || !isNaN(foodInput) || calorieInput === '' || !isNaN(calorieInput)){
      props.displayWarning();
    }else{
      // add to foodlist
    }
  }

  return (
    <form className='bg-light' onSubmit={validateAndSubmitInput}>
      <div className='container'>
        <label>Food:</label>
        <input type="text" value={foodInput} onChange={foodOnChangeHandler}/>
      </div>
      <div className="container">
        <label>Calorie:</label>
        <input type="text" value={calorieInput}onChange={calorieOnChangeHandler}/>
      </div>
      <div className="container">
        <label>Time:</label>
        <input type="time" value={timeInput} onChange={timeOnChangeHandler}/>
      </div>
      <div className='text-center'>
         <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form