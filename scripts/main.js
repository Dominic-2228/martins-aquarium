import {fishList} from "./fishList.js"
import { locationList } from "./locationList.js"
import {tipsList} from "./tiplist.js"
import { times3 } from "./fishRegime.js"
import { times5 } from "./fishRegime.js"
import { regFish } from "./fishRegime.js"



//Generate the fish list 
const fishHTML = fishList()

// Generate the care tips 
const tipHTML = tipsList()

// // Generate the Location list
const locationHTML = locationList()

//Fish length thats a mulitple of 5
const mulitple5 = times5()

//Fish length thats a mulitple of 3
const mulitple3 = times3()

//Fish length thats a multiple of anything but 3 && 5
const regMultiple = regFish()

// Render each HTML string in the correct DOM element

const HTMLfishList = document.getElementById('fishList')
const HTMLfishTips = document.getElementById('tipList')
const HTMLlocation = document.getElementById('locationList')
const HTMLfishOrder5 = document.getElementById('fishOrder5')
const HTMLfishOrder3 = document.getElementById('fishOrder3')
const HTMLfishOrderReg = document.getElementById('fishOrder')

if(HTMLfishList){
  HTMLfishList.innerHTML = fishHTML
} 
if(HTMLfishTips){
  HTMLfishTips.innerHTML = tipHTML
}
if (HTMLlocation) {
  HTMLlocation.innerHTML = locationHTML
}
if (HTMLfishOrder5) {
  HTMLfishOrder5.innerHTML = mulitple5
}
if(HTMLfishOrder3){
  HTMLfishOrder3.innerHTML = mulitple3
}
if(HTMLfishOrderReg){
  HTMLfishOrderReg.innerHTML = regMultiple
}
else{
  console.log('No reference found')
}


