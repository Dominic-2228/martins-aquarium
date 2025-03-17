import { database } from "./aquarimData.js"
const {fish} = database

export const times3 = () => {
  let times3Array = '<h3>Fish Mulitplied by 3</h3>'

  for (const fishes of fish) {
    if(fishes.length % 3 === 0 && fishes.length % 5 !== 0){
     times3Array += `<p>${fishes.name}</p>`
    }
  }
  return times3Array
}

export const times5 = () => {
  let times5Array = '<h3>Fish mulitpled by 5</h3>'

  for (const fishes of fish) {
    if(fishes.length % 5 === 0 && fishes.length % 3 !== 0){
     times5Array += `<p>${fishes.name}</p>`
    }
  }
  return times5Array
}

export const regFish = () => {
  let regFishArray = '<h3>Other Fish</h3>'

  for (const fishes of fish) {
    if(fishes.length % 3 !== 0 && fishes.length % 5 !== 0){
     regFishArray += `<p>${fishes.name}</p>`
      }
    }
    return regFishArray
  }
