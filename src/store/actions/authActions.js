export const login = (username, password) => {
  return (dispatch) => {
    if ((username === 'admin' && password === 'admin1234') || (username === 'guest' && password === 'guest1234')) {
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
};
export const logout =() => ({
    type: 'LOGOUT',
  });