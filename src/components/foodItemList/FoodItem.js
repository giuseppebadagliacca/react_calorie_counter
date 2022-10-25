import React from 'react'
import classes from './foodItemList.module.css';

function FoodItem(props) {
  return (
    <div className={classes['food-item']}>
      <h1>{props.food}</h1>
      <h2>{props.calorie}</h2>
      <h3>{props.time}</h3>
    </div>
  )
}

export default FoodItem