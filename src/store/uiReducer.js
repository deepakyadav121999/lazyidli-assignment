const initialState = {
  isAddScorePopupVisible: false,
};

const SHOW_ADD_SCORE_POPUP = 'SHOW_ADD_SCORE_POPUP';
const HIDE_ADD_SCORE_POPUP = 'HIDE_ADD_SCORE_POPUP';

export const showAddScorePopup = () => ({
  type: SHOW_ADD_SCORE_POPUP,
});

export const hideAddScorePopup = () => ({
  type: HIDE_ADD_SCORE_POPUP,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ADD_SCORE_POPUP:
      return { ...state, isAddScorePopupVisible: true };
    case HIDE_ADD_SCORE_POPUP:
      return { ...state, isAddScorePopupVisible: false };
    default:
      return state;
  }
};

export default uiReducer;
