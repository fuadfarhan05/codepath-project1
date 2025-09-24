import Card from './Card'
import './App.css'
import atomicHabits from './atomichabits.png'
import psychoCybernetics from './psychocybernetics.png'
import theHobbit from './thehobbit.png'
import MongoDB from './mongodb.png'


function App() {

  const handleClick = (book) => {
     alert(`You clicked on ${book}`);
  }


  return (
    <div>
      <h1>Books I Have Read:</h1>
      <Card book="Atomic Habits" img={atomicHabits} button="click me" onButtonClick={() => handleClick("Atomic Habits")}/>
      <Card book="Psycho Cybernetics" img={psychoCybernetics} button="click me" onButtonClick={() => handleClick("Psycho Cybernetics")}/>
      <Card book="The Hobbit" img={theHobbit} button="click me" onButtonClick={() => handleClick('The Hobbit')}/>
      <Card book="MongoDB Guide" img={MongoDB} button="click me"onButtonClick={() => handleClick("MongoDB Guide")}/>
  
    </div>
  )
}

export default App
