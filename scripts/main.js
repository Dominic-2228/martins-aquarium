import {fishList} from "./fishList.js"
// import { locationList } from "./locationList.js"
import {tipList} from "./tiplist.js"



//Generate the fish list 
const fishHTML = fishList()

// Generate the care tips 
// const tipHTML = tipList()

// // Generate the Location list
// const locationHTML = locationList()

// Render each HTML string in the correct DOM element

const HTMLfishList = document.getElementById('fishList')

if(HTMLfishList){
  HTMLfishList.innerHTML = fishHTML
}

