import {fishList} from "./fishList.js"
import { locationList } from "./locationList.js"
import {tipsList} from "./tiplist.js"



//Generate the fish list 
const fishHTML = fishList()

// Generate the care tips 
const tipHTML = tipsList()

// // Generate the Location list
const locationHTML = locationList()

// Render each HTML string in the correct DOM element

const HTMLfishList = document.getElementById('fishList')
const HTMLfishTips = document.getElementById('tipList')
const HTMLlocation = document.getElementById('locationList')

if(HTMLfishList){
  HTMLfishList.innerHTML = fishHTML
} 
if(HTMLfishTips){
  HTMLfishTips.innerHTML = tipHTML
}
if (HTMLlocation) {
  HTMLlocation.innerHTML = locationHTML
}
else{
  console.log('No reference found')
}


