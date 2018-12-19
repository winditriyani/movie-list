const FIRST_INITIAL = {
  data: [],
  detail:[],
  isSugesstion: false,
};

export const actionTypes = {
  FETCH_DATA: 'FETCH_DATA',
  SUGGESTION_LIST: 'SUGGESTION_LIST',
  DETAIL_FILM:'DETAIL_FILM'
};


export default (state = FIRST_INITIAL, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      state = {
        ...state,
        count: state.count + 1
      };
      break;
    case actionTypes.SUGGESTION_LIST:
      state = {
        ...state,
        data: action.data,
        isSugesstion: true,
      };
      break;
    case actionTypes.DETAIL_FILM:
      state = {
        ...state,
        detail: action.data,
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
