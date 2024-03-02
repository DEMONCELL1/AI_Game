const initialState = {
    isAuthenticated: false,
    username: '',
    password: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
                password: action.payload.password,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;