import React from 'react'
import "./Training.css"

import { Link} from "react-router-dom"

import pod from "./assets/pod.jpg"
import moon from "./assets/moon.jpg"

function Trainings() {
  return (
    <div className="training">
        <div className="left">
            <h1>Trainings</h1>
            <p> Calories Fried rice contains approximately 228 calories in a 1 cup serving, according to the U.S. Department of Agriculture's Food Nutrition Information Center. However, other sources list higher calorie counts for the same amount of plain fried rice. For instance, the Healthy Weight Forum's Chinese food calorie chart shows 363 calories for the same amount serving of plain fried rice. Because fried rice is a type of food and not a single recipe, the calorie count will vary because of the amounts and types of rice and oils used to prepare the dish. If you are counting calories, err on the side of counting too many calories. Advertisement </p>
            <Link to="/contact"> <button class="btn">Contact</button> </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="image-stuck top">
                    <img src={moon}  className="img"alt="" />
                </div>
                <div className="image-stuck bottom">
                    <img src={pod}  className="img"alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trainings