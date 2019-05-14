import { connect } from "react-redux";
import {getForkEventData, getPullRequestData, handleChange, handleLogin} from "../actions/actions";
import App from '../components/App'

const mapStateToProps = (state) => ({
    isLoggedIn: state.gitHubReducer.isLoggedIn,
    user: state.gitHubReducer.user,
    userInput: state.gitHubReducer.userInput,
    forkEventData: state.gitHubReducer.forkEventData,
    pullRequestData: state.gitHubReducer.pullRequestData,
});

const mapDispatchToProps =  {
    handleLogin,
    handleChange,
    getForkEventData,
    getPullRequestData,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)