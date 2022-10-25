import React from 'react'
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <h3>Calorie Counter</h3>
      <ul>
        <li>
          HOME
        </li>
        <li>
        ABOUT
        </li>
        <li>
        CONTACT
        </li>
      </ul>
    </nav>
  )
}

export default Navbar