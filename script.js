console.log("penguin script running")

// names the different constants and fetches/gets them from the html file
const feedButton = document.querySelector("#feed")
const playButton = document.querySelector("#play")

const feedStat = document.querySelector("#feed-stat")
const playStat = document.querySelector("#play-stat")

const status = document.querySelector("#status")
const imageDiv = document.querySelector("#image-container")

//creates a variable named count and initalizes (starts at. first time) it with a value of zero
let plays = 0
let feeds = 0

let hunger = 10
let happiness = 0


feedButton.addEventListener('click', (e) => {
    if (hunger>0){
         feeds += 1
         hunger -= 1
         status.innerHTML = "You fed your Penguin"
         feedStat.innerHTML = `Hunger: ${hunger}`        
    } else{
        status.innerHTML = "Your Penguin isn't hungry!"
        feedStat.innerHTML = `Hunger: ${hunger}`
    }
})

playButton.addEventListener('click', (e) => {
 plays += 1
 happiness += 1
 status.innerHTML = "You played with your Penguin"
 playStat.innerHTML = `Happiness: ${happiness}`
})

//Timers
var myVar = setInterval(myTimer, 2000);

function myTimer() {
    if (happiness>0){
      happiness -= 1  
    }
    if (hunger >0){
     hunger += 1        
    }
     playStat.innerHTML = `Happiness: ${happiness}`
     feedStat.innerHTML = `Hunger: ${hunger}`
}
