const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector("#reset-btn")
const newBtn = document.querySelector("#new-btn")
const msgContainer  = document.querySelector(".msg-container")
const msg = document.querySelector("#msg")
const button = document.querySelector("#mode")
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true;
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach( (box) => {
    box.addEventListener('click', () => {
     if(turnO){
        box.innerText = "X"
        turnO = false;
     } else{
        box.innerText = "O"
        turnO = true;
     }   
     box.disabled = true;
     
     checkWinner();
       
        
    })
})

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}, Congratulation for wasting your time, hahaha !`
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for (const pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText
        let posVal2 = boxes[pattern[1]].innerText
        let posVal3 = boxes[pattern[2]].innerText

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
          if (posVal1 === posVal2 && posVal2 === posVal3)
            showWinner(posVal1)       
    }
    }
}

newBtn.addEventListener('click', resetGame)
resetBtn.addEventListener("click", resetGame)



let currMode = "light";
button.addEventListener('click', () => {
      if (currMode === "light") {
        currMode = "dark"
         document.body.classList.add("dark")
         document.body.classList.remove("light")
          button.innerText = "Light Mode"
      } else{
        currMode = "light"
         document.body.classList.add("light")
         document.body.classList.remove("dark")
          button.innerText = "Dark Mode"
      }
      console.log(currMode);
      
 })



