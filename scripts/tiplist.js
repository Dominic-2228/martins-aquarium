import { database } from "./aquarimData.js";
const { tips } = database

export const tipsList = () => {
  let tipsHTML = '<h1>Tips for beginners</h1>'
  let number = 0
  for (const list of tips) {
    number++
    tipsHTML += `
    <div class="tipHTML">
      <h3>${number}. Tip</h3>
      <p>${list.topic}</p> 
      <p>${list.text}</p>
      </div>
    `
  } 
  return tipsHTML 
}