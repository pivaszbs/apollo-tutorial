import React, {Component} from 'react';

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }

    handleChange = e => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { email, username, password, passwordConfirm } = this.state;

        return (
            <div className={"App"}>
                <h2 className="App">SignUp</h2>
                <form action="" className="form">
                    <input type="text" name="username" value={email} placeholder="Username" onChange={this.handleChange}/>
                    <input type="email" name="email" value={username} placeholder="Email Address" onChange={this.handleChange}/>
                    <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange}/>
                    <input type="password" name="passwordConfirm" value={passwordConfirm} placeholder="Password confirmation" onChange={this.handleChange}/>
                    <button type="submit" className="button-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Signup;