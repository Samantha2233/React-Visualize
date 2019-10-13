import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogInPage.scss';

import userService from '../../utils/userService';


class LogInPage extends Component {
    state = {
        email: '',
        pw: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // When successfully signed up show dashboard (root)
            this.props.handleSignUpOrLogIn();
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data
            // TODO: code modal instead of alert
            // this.props.updateMessage(err.message);
            alert('Invalid credentials!');
        }
    }

    render() {
        return (
            <div className="form-page">
                <div className="form form-form">
                    <img className="logo lg" src="../../../images/VISUALIZE-white.png" />
                    <header>Log In</header>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <div>
                                <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form form-bottom">
                                <button>Log In</button>
                                <Link to="/signup">Sign Up?</Link>
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


export default LogInPage;
