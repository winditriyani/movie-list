const FIRST_INITIAL = {
  loading: true,
  loadingDetail: true,
  loadingList:true

};
export const actionTypes = {
  IS_LOADING: 'IS_LOADING',
  END_LOADING: 'END_LOADING',
  FETCH_DATA_DETAIL_START:'FETCH_DATA_DETAIL_START',
  FETCH_DATA_DETAIL_STOP:'FETCH_DATA_DETAIL_STOP',
  FETCH_DATA_SUGGESTION_START: 'FETCH_DATA_SUGGESTION_START',
  FETCH_DATA_SUGGESTION_STOP:'FETCH_DATA_SUGGESTION_STOP'

};



export default (state = FIRST_INITIAL, action) => {
  switch (action.type) {
    case actionTypes.IS_LOADING:
      state = {
        ...state,
        loading: true,
      };
      break;
    case actionTypes.END_LOADING:
      state = {
        ...state,
        loading: false,
      };
      break;
    case actionTypes.FETCH_DATA_DETAIL_START:
      state = {
        ...state,
        loadingDetail: true,
      };
      break;
    case actionTypes.FETCH_DATA_DETAIL_STOP:
      state = {
        ...state,
        loadingDetail: false,
      };
      break;
      case actionTypes.FETCH_DATA_SUGGESTION_START:
        state = {
          ...state,
          loadingList: true,
        };
        break;
      case actionTypes.FETCH_DATA_SUGGESTION_STOP:
        state = {
          ...state,
          loadingList: false,
        };
        break;
    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};
