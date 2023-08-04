import { useState } from 'react';
import './App.css'
import rock from "../src/images/rock.png"
import paper from "../src/images/paper.png"
import scissor from "../src/images/scissor.png"


function App() {
  const[gameItems, setGameItems] = useState([
    {id: 1, name: "rock", imageUrl: rock}, 
    {id: 2, name: "paper", imageUrl: paper}, 
    {id: 3, name: "scissor", imageUrl: scissor}
  ])
  const[isShow, setIsShow] = useState(false)
  const[output, setOuptput] = useState("")
  const [gameScore, setGameScore] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const [selectedItem, setSelectedItem] = useState([])
  const [randomItem, setRandomItem] = useState([])

  const clickItem = (item) =>{
    const randomOne = gameItems[Math.floor(Math.random() * gameItems.length)].name

    let result = ""
    let score = 0

    setSelectedItem(gameItems.filter((ele) => ele.name === item))
    setRandomItem(gameItems.filter((ele) => ele.name === randomOne))

    if(randomOne === "rock" && item === "rock"){
      result = "It's Draw"
      score = gameScore
    }
    if(randomOne === "rock" && item === "paper"){
      result = "You Win"
      score = gameScore + 1
    }
    if(randomOne === "rock" && item === "scissor"){
      result = "You Lose"
      score = gameScore
    }
    if(randomOne === "paper" && item === "paper"){
      result = "It's Draw"
      score = gameScore
    }
    if(randomOne === "paper" && item === "rock"){
      result = "You Lose"
      score = gameScore
    }
    if(randomOne === "paper" && item === "scissor"){
      result = "You Win"
      score = gameScore + 1
    }
    if(randomOne === "scissor" && item === "scissor"){
      result = "It's Draw"
      score = gameScore
    }
    if(randomOne === "scissor" && item === "rock"){
      result = "You Win"
      score = gameScore + 1
    }
    if(randomOne === "scissor" && item === "paper"){
      result = "You Lose"
      score = gameScore
    }

    if(result !== "You Lose"){
      setIsWin(true)
    }

    setGameScore(score)
    setIsShow(true)
    setOuptput(result)
    
  }

  const playAgain = () =>{
    setIsShow(false)
    setGameScore(gameScore)
    setOuptput("")
    setIsWin(false)
  }

  const resetPlay = () =>{
    setIsShow(false)
    setGameScore(0)
    setOuptput("")
  }

  return (
    <div className='app-container'>
      <div className='top-header'>
        <h1>Rock Paper Scissor</h1>
        <span> Your Score: {gameScore}</span>
      </div>
      <div className='bottom-container'>
        <div className='game-container'>
          <div className='game-card'>
            {!isShow && gameItems.map(({id,name,imageUrl}) =>(
                <button key={id} onClick={() => clickItem(name)} className='item-button'><img className='image' src={imageUrl} alt={name}/></button>
            ))}
            {isShow && selectedItem.map(({id,name,imageUrl}) =>(
              <div className='item' key={id}>
                <button className='item-button'><img className='images' src={imageUrl} alt={name}/></button>
                <h1 className='person'>You</h1>
              </div>
            ))}
            {isShow && randomItem.map(({id,name,imageUrl}) =>(
              <div className='item' key={id}>
                <button className='item-button'><img className='images rev' src={imageUrl} alt={name}/></button>
                <h1 className='person'>Opponent</h1>
              </div>
            ))}
          </div>
          <div className='result-container'>
            <h1 className='result'>{output}</h1>
            {!isWin && isShow && <button className='result-button' onClick={resetPlay}>Reset</button>}
            {isWin && isShow && <button className='result-button' onClick={playAgain}>Play Again</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
