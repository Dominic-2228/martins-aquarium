import { database } from "./aquarimData.js"
const {locations} = database
export const locationList = () => {
    let locationHTML = '<h1 class="location">Locations</h1>'
  
    for (const list of locations) {
      locationHTML += `
      <div class="locationHTML">
      <h3 id="h3location">${list.name}</h3>
      <p>${list.country}</p>
      <p>${list.description}</p>
      </div>
      `
    }
    return locationHTML
}