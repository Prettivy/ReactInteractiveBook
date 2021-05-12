// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Title from './components/Title'
import Content from './components/Content'
import story from './story'
import ButtonNextChap from './components/ButtonNextChap'
// import Compteur from './components/Compteur'

function App() {
  const [chapterId,setChapterId] = useState(1)
  const [choiceHistory,setChoiceHistory] = useState([])

  const selectChoice = (id,choice)=>{
    setChapterId(id)
    // Etat futur qui dépend de l'état actuelle on passe par un fonction pour mettre a jour et retourner ce nouvel état
    // Sinon risque d'incohérence
    setChoiceHistory(previousChoices=>{
      return [...previousChoices,choice]
    })
  }

  const onReset = ()=>{
    setChapterId(1)
    setChoiceHistory([])
  }

  const chapter = story.find(chapter=>chapter.id===chapterId)
  if(!chapter){
    return (
      <p>Chapitre manquant!</p>
    )
  }

  const text= chapter.content
  return (
    <>
        <div>
          Chapter Id : {chapterId}
        </div>
        <Title book={chapter.title} chapter={chapter.chapter}/>
        <Content text={text}/>
        <ButtonNextChap choices={chapter.choices} callback={selectChoice}/>
        <button onClick={onReset}>Reset</button>
        {
          choiceHistory.map((choice,i)=> <p key={i}>{choice}</p> )
        }
    </>
  );
}

export default App;
