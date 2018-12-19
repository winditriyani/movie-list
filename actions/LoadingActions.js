export const isLoading = () => {
  return (dispatch) => {
    dispatch({
      type: 'IS_LOADING',
    });
  };
};
export const endLoading = () => {
  return (dispatch) => {
    dispatch({
      type: 'END_LOADING',
    });
  };
};
