import React, { useEffect, useState } from 'react';

const ScoreEntry = ({ score, index, isNew }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isNew) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isNew]);

  let entryClass = 'score-entry other-entries bg';
  if (index === 0) entryClass = 'score-entry top-one bg';
  else if (index === 1) entryClass = 'score-entry top-two bg';
  else if (index === 2) entryClass = 'score-entry top-three bg';

  return (
    <div className={`${entryClass} ${animate ? 'animate-new' : ''} flex-cnt`}>
      <div className='rank '>
        <p className='num'>{index + 1}</p>
      </div>
      <p className='rank'>{score.username}</p>
      <p className='rank'>{score.amount ? `₹${score.amount}` : ''}</p>
      <p className='rank'>{score.time}</p>
    </div>
  );
};

export default ScoreEntry;
