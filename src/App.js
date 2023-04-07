import Game from './components/Game';
import { useState } from 'react';

function App() {
  const[gameItems, setGameItems] = useState(["rock", "paper", "scissor"])
  const[selectedItem, setSelectedItem] = useState("")
  const[randomItem,setRandomItem] = useState("")
  const[isShow, setIsShow] = useState(false)
  const[output, setOuptput] = useState("")
  const [gameScore, setGameScore] = useState(0)

  const clickItem = (data) =>{
    const random = gameItems[Math.floor(Math.random() * gameItems.length)]

    let result = ""
    let score = 0

    if(random === "rock" && data === "rock"){
      result = "draw"
      score = gameScore
    }
    if(random === "rock" && data === "paper"){
      result = "You Win"
      score = gameScore + 1
    }
    if(random === "rock" && data === "scissor"){
      result = "You Lose"
      score = 0
    }
    if(random === "paper" && data === "paper"){
      result = "draw"
      score = gameScore
    }
    if(random === "paper" && data === "rock"){
      result = "You Lose"
      score = 0
    }
    if(random === "paper" && data === "scissor"){
      result = "You Win"
      score = gameScore + 1
    }
    if(random === "scissor" && data === "scissor"){
      result = "draw"
      score = gameScore
    }
    if(random === "scissor" && data === "rock"){
      result = "You Win"
      score = gameScore + 1
    }
    if(random === "scissor" && data === "paper"){
      result = "You Lose"
      score = 0
    }

    setSelectedItem(data)
    setGameScore(score)
    setRandomItem(random)
    setIsShow(true)
    setOuptput(result)
    
  }

  const playAgain = () =>{
    setSelectedItem("")
    setRandomItem("")
    setIsShow(false)
    setGameScore(gameScore)
  }

  const resetPlay = () =>{
    setSelectedItem("")
    setRandomItem("")
    setIsShow(false)
    setGameScore(0)
  }

  return (
    <div style={{position: "absolute", left: "100px", top: "100px", listStyleType: "none"}}>
      <p>score: {gameScore}</p>
      {!isShow && gameItems.map((item) =>(
        <Game key={item} data={item} clickItem={clickItem}/>
      ))}
      {isShow && (
        <>
          <p>{selectedItem}</p>
          <p>{randomItem}</p>
          {output === "You Lose" && <button onClick={resetPlay}>Reset</button>}
          {output !== "You Lose" && <button onClick={playAgain}>Play Again</button>}
        </>
      )}
      <p>{output}</p>
    </div>
  );
}

export default App;
