import { database } from "./aquarimData.js"
const {locations} = database

export const locationList = () => {
    let locationHTML = ""

    for (const list of locations) {
      locationHTML += `
      <h1>${list.name}</h1>
      <p>${list.country}</p>
      <p>${list.description}</p>
      `
    }
    return locationHTML
}