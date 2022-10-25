import React from 'react'
import classes from './foodItemList.module.css';

function FoodItem(props) {
  return (
    <div>
      <div className={classes['food-item']}>
      <h2>{props.food}</h2>
      <h2>{props.calorie}</h2>
      <h2>{props.time}</h2>
      </div>
    </div>
  )
}

export default FoodItem