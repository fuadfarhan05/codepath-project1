import Card from './Card'
import './App.css'
import atomicHabits from './atomichabits.png'
import psychoCybernetics from './psychocybernetics.png'
import theHobbit from './thehobbit.png'
import MongoDB from './mongodb.png'
import FTM from './freakthemight.jpg'
import MaxTM from './maxthemighty.jpg'
import RichDadPoorDad from './richpoor.jpg'
import TheBookThief from './thebooktheif.jpg'
import BraidingSweetgrass from './braiding.jpg'
import AtlasShrugged from './atlas.jpg'

function App() {

  const handleClick = (book) => {
  const query = encodeURIComponent(book);
  window.open(`https://www.google.com/search?q=${query}`, "_blank");
};



  return (
    <div>
      <h1>Books I Have Read:</h1>
      <Card book="Atomic Habits" img={atomicHabits} button="click me" onButtonClick={() => handleClick("Atomic Habits")}/>
      <Card book="Psycho Cybernetics" img={psychoCybernetics} button="click me" onButtonClick={() => handleClick("Psycho Cybernetics")}/>
      <Card book="The Hobbit" img={theHobbit} button="click me" onButtonClick={() => handleClick('The Hobbit')}/>
      <Card book="MongoDB Guide" img={MongoDB} button="click me"onButtonClick={() => handleClick("MongoDB Guide")}/>
      <Card book="Freak the Mighty" img={FTM} button="click me"onButtonClick={() => handleClick("Freak the Mighty")}/>
      <Card book="Max the Mighty" img={MaxTM} button="click me"onButtonClick={() => handleClick("Max the Mighty")}/>
      <Card book="Rich Dad Poor Dad" img={RichDadPoorDad} button="click me"onButtonClick={() => handleClick("Rich Dad Poor Dad")}/>
      <Card book="The Book Thief" img={TheBookThief} button="click me"onButtonClick={() => handleClick("The Book Thief")}/>
      <Card book="Braiding Sweetgrass" img={BraidingSweetgrass} button="click me"onButtonClick={() => handleClick("Braiding Sweetgrass")}/>
      <Card book="Atlas Shrug" img={AtlasShrugged} button="click me"onButtonClick={() => handleClick("Atlas Shrug")}/>
  
    </div>
  )
}

export default App
