import React from 'react'
import FoodItem from './FoodItem'
import classes from './foodItemList.module.css';

function FoodItemsList() {
  const foodItems = [
    {id:1,
    food: 'pizza',
    calorie: 200,
    time: '1:00pm'},
  ]

  return (
    <div className={`${classes.border}`}>
      <FoodItem food={foodItems[0].food} calorie={foodItems[0].calorie} time={foodItems[0].time}/>
    </div>
  )
}

export default FoodItemsList