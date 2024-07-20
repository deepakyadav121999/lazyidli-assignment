const initialState = {
  scores: [
    { username: 'Anjum', time: '00:56:23', amount: 50000 },
    { username: 'Pragati Azad', time: '00:56:23', amount: 5000 },
    { username: 'Pragati Azad', time: '00:56:23', amount: 500 },
    { username: 'Hannibal Hector', time: '00:56:23', amount: 0 },
    { username: 'Razzi', time: '00:56:23', amount: 0 },
    { username: 'McRamble', time: '00:56:23', amount: 0 },
    { username: 'Razzi', time: '00:56:23', amount: 0 },
    { username: 'McRamble', time: '00:56:23', amount: 0 },
    { username: 'Muhammed Anjum Kunnummal', time: '00:56:23', amount: 0 },
    { username: 'Muhammed Anjum Kunnummal', time: '00:56:23', amount: 0 },
  ],
};

const ADD_SCORE = 'ADD_SCORE';

export const addScore = (score) => ({
  type: ADD_SCORE,
  payload: score,
});

const parseTime = (time) => {
  const [minutes, seconds, milliseconds] = time.split(':').map(Number);
  return minutes * 60000 + seconds * 1000 + milliseconds;
};

const scoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      const updatedScores = [...state.scores, action.payload];
      updatedScores.sort((a, b) => parseTime(a.time) - parseTime(b.time));
      updatedScores.forEach((score, index) => {
        if (index === 0) score.amount = 50000;
        else if (index === 1) score.amount = 5000;
        else if (index === 2) score.amount = 500;
        else score.amount = 0;
      });
      if (updatedScores.length > 10) updatedScores.pop();
      return { ...state, scores: updatedScores };
    default:
      return state;
  }
};

export default scoresReducer;
