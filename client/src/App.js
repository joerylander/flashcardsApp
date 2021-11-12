import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './components/Main.js'

const fetchData = async() => {
  const result = await axios.get('http://localhost:5050/api/flashcards');
  return result.data;
};

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect( () => {
    (async() => {
      const data = await fetchData();
      setCards(data);
    })()
  }, []);

  return (
    <>
     < Main cards={cards} />
    </>
  );
}

export default App;
