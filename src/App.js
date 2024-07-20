import React from 'react';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { showAddScorePopup } from './store/uiReducer';
import Header from './components/Header';
const App = () => {
  const isAddScorePopupVisible = useSelector(
    (state) => state.ui.isAddScorePopupVisible
  );
  const dispatch = useDispatch();

  return (
    <div className="app">
      
      <Header/>
    
     
      <div  className='add_btn'>
      <button onClick={() => dispatch(showAddScorePopup())} >
        Add Score
      </button>
      </div>
     
      <Leaderboard />
      {isAddScorePopupVisible && <AddScorePopup />}
    
      <Footer />
    </div>
  );
};

export default App;
