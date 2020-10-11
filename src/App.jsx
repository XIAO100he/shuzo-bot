import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import { db } from './firebase/index'


const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question'
    })
    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
    addChats({
      text: selectedAnswer,
      type: 'answer'
    })
    setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 1000);
  },[answers])

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  useEffect(() => {
    (async () => {
      const initDataset = {};
      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
        setDataset(initDataset)
        displayNextQuestion(currentId, initDataset[currentId])
        // TODO：削除
        console.log(initDataset);
      })
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <AnswersList answers={answers} select={selectAnswer}/>
      </div>
    </section>
  );
}

export default App
