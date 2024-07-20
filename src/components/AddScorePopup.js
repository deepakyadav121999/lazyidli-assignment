import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/scoresReducer';
import { hideAddScorePopup } from '../store/uiReducer';
import { IoMdClose } from "react-icons/io";
const AddScorePopup = () => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const normalizeTime = (time: string) => {
    let [minutes, seconds, milliseconds] = time.split(':').map(Number);

    // Normalize the seconds and minutes
    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

  const handleSubmit = () => {
    const normalizedTime = normalizeTime(time);
    dispatch(addScore({ username, time: normalizedTime, amount: 0 }));
    dispatch(hideAddScorePopup());
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, '').slice(0, 6);
    const formattedValue = digitsOnly
      .replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3')
      .replace(/(\d{2})(\d{2})/, '$1:$2');

    setTime(formattedValue);
  };

  return (
    <div className="add-score-popup">
      <div className="popup-content">
        <div className='close_menu'>
      

        <IoMdClose onClick={() => dispatch(hideAddScorePopup())} size={30}/>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="MM:SS:MS"
          value={time}
          onChange={handleTimeChange}
          maxLength={8} // MM:SS:MS format length
        />
        <button onClick={handleSubmit}>Add Score</button>
       
      </div>
    </div>
  );
};

export default AddScorePopup;
