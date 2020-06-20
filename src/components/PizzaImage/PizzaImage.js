import React from 'react'
import classes from "./PizzaImage.css"
import PizzaImage from "../../assets/pizza.jpg"

const PizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImage} className={classes.PizzaImg} />
        </div>
    )
}

export default PizzaImage
