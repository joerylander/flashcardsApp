import { useState } from 'react'

const Card = ({ subtitle, question, answer }) => {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <section className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip) }>
        <div className="card__front">
          <p className="card__question">{question}</p>
        </div>

        <div className="card__back">
          <p className="card__answer">{answer}</p>
          {subtitle ? <p className="card__subtitle">{subtitle}</p> : ''}
        </div>
        
      </section>
  </>  
  )
};

export default Card;
