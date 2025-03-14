import { database } from "./aquarimData.js";
const { tips } = database

export const tipsList = () => {
  let tipsHTML = ''
  let number = 0
  for (const list of tips) {
    number++
    tipsHTML += `
      <h1>${number}. Tip</h1>
      <p>${list.topic}</p> 
      <p>${list.text}</p>
    `
  } 
  return tipsHTML 
}