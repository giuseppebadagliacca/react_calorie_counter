import React from 'react'
import FoodItem from './FoodItem'
import classes from './foodItemList.module.css';

function FoodItemsList(props) {

  return (
    <div className={classes.border}>
      <div>
      <h1>Food</h1>
      <h1>Calories</h1>
      <h1>Time</h1>
      </div>
      {props.foods.map(food=>{
        return <FoodItem key={Math.random()*1000} food={food.food} calorie={food.calories} time={food.time}/>
      })}

    </div>
  )
}

export default FoodItemsList