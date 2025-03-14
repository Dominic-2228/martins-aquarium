import { database } from "./aquarimData.js";
const {fish} = database

export const fishList = () => {
  let fishList = ''

  for (const list of fish) {
    fishList += `
    <div class="HTMLfish">
      <h1>${list.name}</h1>
        <p>The species for ${list.name} is ${list.species}.</p>
         <p>${list.name} is ${list.length} feet long.</p>
         <p>${list.name} is located in the ${list.location}.</p>
         <p>${list.name} is known as being a ${list.diet}.</p>
         <img src="${list.image}" alt="${list.species} image">
         </div>
         `
  }
  return fishList
}