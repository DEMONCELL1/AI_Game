const initialState = {
    isAuthenticated: false,
    username: '',
    password: '',
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                error: null
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                error: 'Invalid username or password'
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;