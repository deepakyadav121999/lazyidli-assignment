import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScoreEntry from './ScoreEntry';
import { IoMdTrophy } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import Hdd from './hdd.jpg';
import { loadMoreScores } from '../store/scoresReducer';

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.scores);
  const dispatch = useDispatch();
  const [recentScore, setRecentScore] = useState(null);

  useEffect(() => {
    if (scores.length > 0) {
      setRecentScore(scores[0]);
    }
  }, [scores]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (bottom) {
        dispatch(loadMoreScores());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <div className="leaderboard">
      <img src={Hdd} alt="" className='img_header' />
      <div className='scroll_thing'>
      <div className="grid-header">
        <p className='rank'><IoMdTrophy size={18}/></p>
        <p className='rank'>NAME</p>
        <p className='rank'>AMOUNT</p>
        <div className='rank alarm'>
          <IoIosTimer size={20}/>
          <p>TIME</p>
        </div>
      </div>
      {scores.map((score, index) => (
        <div className='cnt' key={index}>
          <ScoreEntry score={score} index={index} />
        </div>
      ))}
</div>
      {recentScore && (
        <div className="recent-entry">
          <h2>Recent Entry</h2>
          <div className='cnt-2'>
            <ScoreEntry score={recentScore} index={scores.indexOf(recentScore)} isNew={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
