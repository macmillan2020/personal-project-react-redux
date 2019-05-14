import React from 'react';
import '../App.css';
import Login from "./Login";
import Profile from "./Profile";


class App extends React.Component {
    render() {
        return (
            <div className="App wrapper justify-center ">
                {!this.props.isLoggedIn ?
                    <Login
                        handleLogin = {this.props.handleLogin}
                        handleChange = {this.props.handleChange}
                        userInput = {this.props.userInput}
                        // user = {this.props.user}
                        isLoggedIn = {this.props.isLoggedIn}

                    />
                    :
                    <Profile user = {this.props.user}
                             forkEventData = {this.props.forkEventData}
                             pullRequestData = {this.props.pullRequestData}
                             getForkEventData = {this.props.getForkEventData}
                             getPullRequestData = {this.props.getPullRequestData}
                    />}
            </div>
        )
    }
}

export default App;