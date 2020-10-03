import React from 'react';
// {useState, useEffect, useCallback}
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';


const App = () => {
  return (
    <section className="c-section">
      <div className="c-box">
        <Chats />
        <AnswersList />
      </div>
    </section>
  );
}

export default App
