import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {SIGNIN_USER} from "../../queries";
import Error from "../Error";

const initialState = {
    username: "",
    password: "",
}

class Signin extends Component {
    state = { ...initialState };

    clearState = () => this.setState({ ...initialState })

    handleChange = e => {
        const {target: {value, name}} = e;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event, SigninUser) => {
        event.preventDefault();
        SigninUser().then(({ data }) => {
            console.log(data);
            localStorage.setItem('token', data.signinUser.token)
            this.clearState();
        })
    }

    validateForm = () => {
        const {username, password} = this.state;

        return !username || !password;
    }

    render() {
        const {username, password} = this.state;

        return (
            <div className={"App"}>
                <h2 className="App">Signin</h2>
                <Mutation mutation={SIGNIN_USER} variables={{username, password}}>
                    {(SigninUser, { data, loading, error }) => {
                        return (
                            <form className="form" onSubmit={event => this.handleSubmit(event, SigninUser)}>
                                <input type="text" name="username" value={username} placeholder="Username"
                                       onChange={this.handleChange}/>
                                <input type="password" name="password" value={password} placeholder="Password"
                                       onChange={this.handleChange}/>
                                <button disabled={loading || this.validateForm()} type="submit" className="button-primary">
                                    Submit
                                </button>
                                {error && <Error error={error} />}
                            </form>
                        );
                    }}
                </Mutation>
            </div>
        );
    }
}

export default Signin;