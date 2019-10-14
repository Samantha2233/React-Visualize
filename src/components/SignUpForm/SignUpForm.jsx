import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignUpForm.scss';

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
            this.props.handleSignUpOrLogIn();
            this.props.history.push('/month');
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
            <div className="form-page">
                <div className="form form-form">
                    <img className="logo lg" src="../../../images/VISUALIZE-white.png" alt="Logo" />
                    <header>Sign Up</header>
                    <form onSubmit={this.handleSubmit} >
                        <div className="form form-group">
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
                            <div className="form form-bottom">
                                <button disabled={this.isFormInvalid()}>Sign Up</button>
                                <Link to='/login'>Log In?</Link>
                                <Link to='/'>Cancel</Link>
                            </div>
                        </div>
                        <div className="form red"></div>
                        <div className="form orange"></div>
                        <div className='form seafoam'></div>
                        <div className="form salmon"></div>
                        <div className="form black"></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpForm;