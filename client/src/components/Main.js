import { useState, useEffect } from 'react';
import Card from './Card'
import Pagination from './Pagination'

const Main = ({ cards }) => {
 
  const [page, setPage] = useState({
    currPage: 1,
    maxPages: 1
  });

  const findCard = cards.find(card => card.id === page.currPage);

  useEffect(() => {
    if(cards){
      setPage(prevState => ({
        ...prevState,
        maxPages: cards.length
      }))
    }
  }, [cards]);
  

  const buttonAction = e => {
    e.preventDefault();
    const btnText = e.target.innerText;
    if (btnText === 'Next' && page.currPage < cards.length){
        setPage(prevState => ({
          ...prevState,
          currPage: prevState.currPage + 1
        }))
    }
    if(btnText === 'Previous' && page.currPage > 1){
        setPage(prevState => ({
          ...prevState,
          currPage: prevState.currPage - 1
        }))
    }
    if(btnText === 'Random') {
      setPage(prevState => ({
        ...prevState,
        currPage: prevState.currPage =  Math.floor((Math.random() * cards.length) + 1)
      }))
    }
  }

  return (
    <main className='wrapper'>
      { findCard ? <Card subtitle={findCard.subtitle} question={findCard.question} answer={findCard.answer} key={findCard.id}/> : ''}
      <Pagination page={page} setPage={setPage} buttonAction={buttonAction} />
    </main>
  )
};

export default Main;
