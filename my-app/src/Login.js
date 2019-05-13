import React from "react";
import Input from "./Input";
import Submit from "./Submit";

const Login = ({ handleChange, logUserIn, placeholder, name}) => {
	return (
        <div className="login">
            <form className="form">
                <Input
                    name={name}
                    handleChange={handleChange}
                    label="Username"
                    placeholder={placeholder}
                />

                <br/>
                <Submit value="Login" handleClick={logUserIn} />
            </form>
        </div>
    )
};

export default  Login