import '../styles/style.css'
import { workouts } from './workouts.js'
import { DOMSelectors } from './dom.js'

function createCards(){
    workouts.forEach((workout) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
    `<div class="card">
    <div class="card-head">${workout.name}</div>
    <img src = ${workout.image} class = "card-img"/>
    <div class="card-p">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups worked: ${workout.muscleGroup}</div>
    </div>`)
    )
} // find out how to add a space between comma in workout.muscleGroup

createCards()

function changeTheme() {
    
    //click on change theme button
}


// -Use both map and filter to create new arrays to iterate through
// -Create two separate themes using CSS Custom Properties and allow

// npm init vite@latest
// npm i (install in project folder and cd to project folder) every new os
// npm run dev
// npm run build --> send to dist file before uploading

