import axios from 'axios';

export const openSuggestion = () => {
  return (dispatch) => {
    dispatch({ type: 'ADD' });
  };
};
export const ListSuggestion = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_DATA_SUGGESTION_START',
    });
    axios.get('https://swapi.co/api/films/')
      .then(function (response) {
        dispatch({
          type: 'SUGGESTION_LIST',
          data: response.data,
        });
        dispatch({
          type: 'FETCH_DATA_SUGGESTION_STOP',
        });
      })
      .catch(err => {
        dispatch({type:'NOT_FOUND',data:err});
      });
  };
};
export const detailFilm = (param) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_DATA_DETAIL_START',
    });
    axios.get('https://swapi.co/api/films/'+param)
      .then(function (response) {
        dispatch({
          type: 'DETAIL_FILM',
          data: response.data,
        });
        dispatch({
          type: 'FETCH_DATA_DETAIL_STOP',
        });
      })
      .catch(err => {
        dispatch({type:'NOT_FOUND',data:err});
      });
  };
};
export const insertInputSeach = (search = '') => {
  return (dispatch) => {
    dispatch({
      type: 'INSERT_INPUT_SEARCH',
      data: search,
    });
  };
};
export const searchFalse = () => {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_FALSE',
    });
  };
};
