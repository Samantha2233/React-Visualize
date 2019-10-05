import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogInPage extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        e.preventDefault();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <header>Log In</header>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div>
                            <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <button>Log In</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default LogInPage;
