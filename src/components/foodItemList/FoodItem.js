import React from 'react'
import classes from './FoodItem.module.css';

function FoodItem(props) {
  return (
      <div className={classes['food-item']}>
      <h2>{props.food}</h2>
      <h2>{props.calorie}</h2>
      <h2>{props.time}</h2>
      </div>
  )
}

export default FoodItem