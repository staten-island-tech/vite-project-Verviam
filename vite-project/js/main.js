import '../styles/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from 'public/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


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


// download node
// get npm
// npm init vite@latest
// npm i (install in project folder and cd to project folder)
// make css and js folder
// in main.js do "../css/style.css"
// <script type ="module" src="main.js"></script>
// npm run dev

// import './styles.css/ in js file

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

// export {variable1, variable2}
// import {variable1, variable2} from "./arrayOfItems"
// import {idk} from "./Dom"

// images go in public folder

// npm run build --> send to dist file