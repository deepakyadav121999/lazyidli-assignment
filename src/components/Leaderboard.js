import React from 'react';
import { useSelector } from 'react-redux';
import ScoreEntry from './ScoreEntry';
import { IoMdTrophy } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import Hdd from './hdd.jpg'

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.scores);

  return (
    <div className="leaderboard">
<img src={Hdd} alt="" className='img_header' />
      <div className="grid-header">
        <p className='rank'><IoMdTrophy  size={18}/></p>
        <p className='rank'>NAME</p>
        <p className='rank'>AMOUNT</p>
        <div className='rank alarm'>
        <IoIosTimer size={20}/>
        <p >TIME</p>
        
        </div>
       
      </div>
      {scores.map((score, index) => (
        <div className='cnt'>
        <ScoreEntry key={index} score={score} index={index} />
   
       </div>
      ))}
    </div>
  );
};

export default Leaderboard;
