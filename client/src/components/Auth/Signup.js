import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {SIGNUP_USER} from "../../queries";
import Error from "../Error";
import {withRouter} from "react-router-dom";

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
}

class Signup extends Component {
    state = { ...initialState };

    clearState = () => this.setState({ ...initialState })

    handleChange = e => {
        const {target: {value, name}} = e;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(async ({ data }) => {
            console.log(data);
            localStorage.setItem('token', data.signupUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/');
        })
    }

    validateForm = () => {
        const {email, username, password, passwordConfirm} = this.state;

        return !email || !username || !password || passwordConfirm !== password;
    }

    render() {
        const {email, username, password, passwordConfirm} = this.state;

        return (
            <div className={"App"}>
                <h2 className="App">SignUp</h2>
                <Mutation mutation={SIGNUP_USER} variables={{username, email, password}}>
                    {(signupUser, { data, loading, error }) => {
                        return (
                            <form className="form" onSubmit={event => this.handleSubmit(event, signupUser)}>
                                <input type="text" name="username" value={username} placeholder="Username"
                                       onChange={this.handleChange}/>
                                <input type="email" name="email" value={email} placeholder="Email Address"
                                       onChange={this.handleChange}/>
                                <input type="password" name="password" value={password} placeholder="Password"
                                       onChange={this.handleChange}/>
                                <input type="password" name="passwordConfirm" value={passwordConfirm}
                                       placeholder="Password confirmation"
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

export default withRouter(Signup);