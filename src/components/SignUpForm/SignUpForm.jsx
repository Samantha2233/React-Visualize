import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignUpForm extends Component {
    state = {
        name: '',
        emial: '',
        password: '',
        passwwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            // When successfully signed up show dashboard (root)
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }


    render() {
        return (
            <div>
                <header>Sign Up</header>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div>
                            <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type='email' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type='password' placeholder='Password' value={this.state.password} name='password' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type='password' placeholder='Confirm Password' value={this.state.passwordConf} name='passwordConf' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <button disabled={this.ifFormInvalid()}>Sign Up</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;