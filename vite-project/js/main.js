import "../styles/style.css";
import { workouts } from "./workouts.js";
import { DOMSelectors } from "./dom.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init(); // npm install aos --save

function createCards() {
  workouts.forEach((workout) =>
    DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card" data-aos="fade-right">
    <div class="card-head" data-aos="flip-up">${workout.name}</div>
    <img src = ${workout.image} class = "card-img"/>
    <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
    </div>`
    )
  );
}

// find out how to add a space between comma in workout.muscleGroup and change to capital letters

createCards();

DOMSelectors.themeButton.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.replace("light", "dark");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
  }
});

// fix to lower case for button text content

let equipmentButtons = DOMSelectors.equipmentButtons;
equipmentButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let chooseFilter = button.textContent.toLowerCase();

    const filteredEquipment = workouts
      .filter((workout) => workout.equipment.includes(chooseFilter))
      .map((workout) => ({
        name: workout.name,
        image: workout.image,
        difficulty: workout.difficulty,
        equipment: workout.equipment,
        muscleGroup: workout.muscleGroup,
      }));

    filteredEquipment.forEach((workouts) => {
      workouts.forEach((workout) =>
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" data-aos="fade-right">
        <div class="card-head" data-aos="flip-up">${workout.name}</div>
        <img src = ${workout.image} class = "card-img"/>
        <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
        </div>`
        )
      );
    });
  });
});

let difficultyButtons = DOMSelectors.difficultyButtons;
difficultyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let chooseFilter = button.textContent.toLowerCase();

    const filteredDifficulty = workouts
      .filter((workout) => workout.difficulty.includes(chooseFilter))
      .map((workout) => ({
        name: workout.name,
        image: workout.image,
        difficulty: workout.difficulty,
        equipment: workout.equipment,
        muscleGroup: workout.muscleGroup,
      }));

    filteredDifficulty.forEach((workouts) => {
      workouts.forEach((workout) =>
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" data-aos="fade-right">
        <div class="card-head" data-aos="flip-up">${workout.name}</div>
        <img src = ${workout.image} class = "card-img"/>
        <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
        </div>`
        )
      );
    });
  });
});

// // old code
// function filteredDumbbells() {
//   const dumbbellWorkouts = workouts
//     .filter((workout) => workout.equipment.includes("dumbbell"))
//     .map((workout) => ({
//       //maps into new array
//       name: workout.name,
//       image: workout.image,
//       difficulty: workout.difficulty,
//       equipment: workout.equipment,
//       muscleGroup: workout.muscleGroup,
//     }));

//   dumbbellWorkouts.forEach((workout) =>
//     DOMSelectors.cards.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card" data-aos="fade-right">
//     <div class="card-head" data-aos="flip-up">${workout.name}</div>
//     <img src = ${workout.image} class = "card-img"/>
//     <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
//     </div>`
//     )
//   );
// }

// function filteredBodyweight() {
//   const bodyweightWorkouts = workouts
//     .filter((workout) => workout.equipment.includes("bodyweight"))
//     .map((workout) => ({
//       name: workout.name,
//       image: workout.image,
//       difficulty: workout.difficulty,
//       equipment: workout.equipment,
//       muscleGroup: workout.muscleGroup,
//     }));

//   bodyweightWorkouts.forEach((workout) =>
//     DOMSelectors.cards.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card" data-aos="fade-right">
//     <div class="card-head" data-aos="flip-up">${workout.name}</div>
//     <img src = ${workout.image} class = "card-img"/>
//     <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
//     </div>`
//     )
//   );
// }

// function filteredEasy() {
//   const easyWorkouts = workouts
//     .filter((workout) => workout.difficulty.includes("easy"))
//     .map((workout) => ({
//       name: workout.name,
//       image: workout.image,
//       difficulty: workout.difficulty,
//       equipment: workout.equipment,
//       muscleGroup: workout.muscleGroup,
//     }));

//   easyWorkouts.forEach((workout) =>
//     DOMSelectors.cards.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card" data-aos="fade-right">
//     <div class="card-head" data-aos="flip-up">${workout.name}</div>
//     <img src = ${workout.image} class = "card-img"/>
//     <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
//     </div>`
//     )
//   );
// }

// function filteredHard() {
//   const hardWorkouts = workouts
//     .filter((workout) => workout.difficulty.includes("hard"))
//     .map((workout) => ({
//       name: workout.name,
//       image: workout.image,
//       difficulty: workout.difficulty,
//       equipment: workout.equipment,
//       muscleGroup: workout.muscleGroup,
//     }));

//   hardWorkouts.forEach((workout) =>
//     DOMSelectors.cards.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card" data-aos="fade-right">
//     <div class="card-head" data-aos="flip-up">${workout.name}</div>
//     <img src = ${workout.image} class = "card-img"/>
//     <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
//     </div>`
//     )
//   );
// }

// function filteredModerate() {
//   const moderateWorkouts = workouts
//     .filter((workout) => workout.difficulty.includes("moderate"))
//     .map((workout) => ({
//       name: workout.name,
//       image: workout.image,
//       difficulty: workout.difficulty,
//       equipment: workout.equipment,
//       muscleGroup: workout.muscleGroup,
//     }));

//   moderateWorkouts.forEach((workout) =>
//     DOMSelectors.cards.insertAdjacentHTML(
//       "beforeend",
//       `<div class="card" data-aos="fade-right">
//     <div class="card-head" data-aos="flip-up">${workout.name}</div>
//     <img src = ${workout.image} class = "card-img"/>
//     <div class="card-p" data-aos="flip-up">Difficulty: ${workout.difficulty} <br> Equipment: ${workout.equipment} <br> Muscle Groups Worked: ${workout.muscleGroup}</div>
//     </div>`
//     )
//   );
// }

// DOMSelectors.everything.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   createCards();
// });

// DOMSelectors.dumbbells.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   filteredDumbbells();
// });

// DOMSelectors.bodyweight.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   filteredBodyweight();
// });

// DOMSelectors.easyDifficulty.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   filteredEasy();
// });

// DOMSelectors.moderateDifficulty.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   filteredModerate();
// });

// DOMSelectors.hardDifficulty.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = "";
//   filteredHard();
// });

// npm init vite@latest
// npm i (install in project folder and cd to project folder) every new os
// npm run dev
// npm run build --> send to dist file before uploading
