import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div className={"App"}>
                <h2 className="App">SignUp</h2>
                <form action="" className="form">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="passwordConfirm" placeholder="Password confirmation"/>
                    <button type="submit" className="button-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Signup;