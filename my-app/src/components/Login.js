import React from "react";

class Login extends React.Component {
    render () {
        return (
            <div className="login">
                <form className="form">
                    <label htmlFor="username">GitHub Username: </label>
                    <input  type="text" onChange={(e) => this.props.handleChange(e.target.value)} placeholder="ex: macmillan2020" name={this.props.userInput} value={this.props.userInput} required/>
                    <br/>
                    <button className="button" type="button" onClick={ ()=>this.props.handleLogin(this.props.userInput) }>Log In</button>

                </form>
            </div>
        )
    }
}
export default  Login
