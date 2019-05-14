const initialState = {
    isLoggedIn: false,
    userInput: '',
    user: 'none',
    forkEventData: [],
    pullRequestData: []
};

const userEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return {
                ...state,
                userInput: action.payload,
            }
        case 'HANDLE_LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case 'SET_FORK_EVENTS':
            return {
                ...state,
                forkEventData: action.payload,
            };
        case 'SET_PR_EVENTS':
            return {
                ...state,
                pullRequestData: action.payload,
            };
        default:
            return initialState;
    };

}

export default userEventReducer;