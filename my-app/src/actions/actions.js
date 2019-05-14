import axios from "axios";

const setUsername = payload => ({
    type: "HANDLE_CHANGE",
    payload
});

export const handleChange = (userInput) => {
    return function(dispatch, getState) {
        dispatch(setUsername(
            userInput
        ));
    };
}

const setUserData = payload => ({
    type: "HANDLE_LOGIN",
    payload
});

export const handleLogin = (name) => {
    return function(dispatch, getState) {
        if( name !== '' ) {
            dispatch(setUserData(
                name
            ));
        }
    }
}

const setForkEvents = payload => ({
    type: "SET_FORK_EVENTS",
    payload
});

export const getForkEventData = () => {
    return function(dispatch, getState) {
        const username = getState().gitHubReducer.user
        axios.get('https://api.github.com/users/' + username + '/events')
            .then(eventList => {
                const forkEvents = eventList.data.reduce((acc, curr) => {
                    let singleEvent = { ...curr };
                    if (singleEvent.type === "ForkEvent"){
                        acc.push({
                            id: singleEvent.id,
                            type: singleEvent.type,
                            url: singleEvent.repo.url,
                            title: singleEvent.repo.name
                        });
                    }
                    return acc;
                }, []);
                dispatch(setForkEvents(forkEvents));
            })
            .catch(err=> console.log(err.message))
    }
};

const setPullRequestData = payload => ({
    type: "SET_PR_EVENTS",
    payload
});

export const getPullRequestData = () => {
    return function(dispatch, getState) {
        const username = getState().gitHubReducer.user
        console.log(username)
        axios.get('https://api.github.com/search/issues?q=author:' + username + '+type:pr')
            .then(res => {
                console.log(res.data.items)
                dispatch(setPullRequestData(res.data.items))
            })
            .catch(err=> console.log(err.message))
    }
}



