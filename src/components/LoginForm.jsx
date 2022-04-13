import React, {Component} from "react";

class LoginForm extends Component {

    state = {
        acc: {username:"", password:""},
        error:{}
    };

    validate = () =>{
        const error = {};
        const {acc} = this.state ;
        if (acc.username.trim() === '')
            error.username = 'Username is invalid';
        if (acc.password.trim() === '')
            error.password = 'Password is invalid';
        return Object.keys(error).length === 0 ? null : error;
    };

    handleSubmit = s =>{
        s.preventDefault();
        const error = this.validate();
        this.setState({error: error || {} });
        if (error) return;
    };

    handleChange = ({currentTarget: input}) => {
        const acc = {...this.state.acc};
        acc[input.name] = input.value;
        this.setState({acc});
    };
    

    render() {
        const {acc, error} = this.state;
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                        value={acc.username}
                        onChange={this.handleChange}
                        name="username"
                        id="username" 
                        type="text" 
                        className="form-control"
                        />
                        {error.username && <div className=" alert alert-danger ">{error.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        value={acc.password}
                        onChange={this.handleChange}
                        name="password"
                        id="password" 
                        type="text" 
                        className="form-control" 
                        />
                        {error.password && <div className=" alert alert-danger ">{error.password}</div>}
                    </div>
                    <div>
                        <button className="btn btn-success" onclick="" >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;