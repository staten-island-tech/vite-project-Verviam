import '../styles/style.css'
import { workouts } from './workouts.js'
import { DOMSelectors } from './dom.js'

function createCards(){
    workouts.forEach((workout) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
    `<div class="card">
    <div class="card-head">${workout.name}</div>
    <div class="card-img">${workout.image}</div>
    <div class="card-p">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups worked: ${workout.muscleGroup}</div>
    </div>`)
    )
} // find out how to add a space between comma in workout.muscleGroup

createCards()


// Using ViteJS, you will scaffold a single page project that will act as a store
// front for a business. The site will render cards for products using forEach()
// and iterate over an array in your JS files. Through User Interactions the
// product list will change. You will use BOTH filter and map to create new
// arrays to iterate through and display on the screen. You will also be
// creating themes using CSS Custom Properties. Users will be able to
// change themes as desired
// -Use Vite to Scaffold a project
// -Use both map and filter to create new arrays to iterate through
// -Create two separate themes using CSS Custom Properties and allow
// users to change theme


// get npm
// npm init vite@latest
// npm i (install in project folder and cd to project folder) every new os
// npm run dev
// npm run build --> send to dist file before uploading


// naming variables with css
// :root {
//    --dark-blue: #135cc5;
//    --primary: var(var(--dark-blue))

//    --h1: 7.594rem;
//    }
// body {
//   background-color: var(--primary);
//  }

// h1 {
//  font-size: var(--h1)
// }


// images go in public folder
