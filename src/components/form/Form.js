import React, { useState } from 'react';
import classes from './From.module.css';


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

  function convertedTime(time){
    let firstTwoNums = Number(time.slice(0,2));
    const lastTwoNums = time.slice(-2);
    if(firstTwoNums <=12){
      return `${firstTwoNums}:${lastTwoNums}am`;
    }else{
      firstTwoNums-=12;
      return `${firstTwoNums}:${lastTwoNums}pm`;
    }
  }

  const validateAndSubmitInput = (e) =>{
    e.preventDefault();
    if(foodInput === '' || !isNaN(foodInput) || calorieInput === '' || isNaN(calorieInput)){
      props.displayWarning();
    }else{
      const timeConvert = convertedTime(timeInput);
      props.addFoodHandler(foodInput, calorieInput, timeConvert);
    }
  }

  
  return (
    <form className={classes.form} onSubmit={validateAndSubmitInput}>
      <div>
        <label htmlFor='food'>Food:</label>
        <input id='food' type="text" value={foodInput} onChange={foodOnChangeHandler}/>
      </div>
      <div >
        <label htmlFor='calorie'>Calorie:</label>
        <input id='calorie' type="text" value={calorieInput}onChange={calorieOnChangeHandler}/>
      </div>
      <div>
        <label htmlFor='time'>Time:</label>
        <input id='time' type="time" value={timeInput} onChange={timeOnChangeHandler}/>
      </div>
      <div id={classes.button}>
         <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Form