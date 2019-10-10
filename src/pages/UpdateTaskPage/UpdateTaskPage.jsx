import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateTaskPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.task
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateTask(this.state.formData);
    }

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div className='form-page'>
                <div className="form form-form">
                    <h1>Edit Task</h1>
                    <form ref={this.formRef} autocomplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input name='name' value={this.state.formData.name} onChange={this.handleChange} placeholder="Task Description" required />
                        </div>
                        <div className="dropdowns">
                            <div className="form-group">
                                <select name="color" value={this.state.formData.color} onChange={this.handleChange.bind(this)} className="color-options">
                                    <option value='select'>Select a Color</option>
                                    <option value='red-task'>Red</option>
                                    <option value='orange-task'>Orange</option>
                                    <option value='yellow-task'>Yellow</option>
                                    <option value='blue-task'>Blue</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name='size' value={this.state.formData.size} onChange={this.handleChange} >
                                    <option>Select a Size</option>
                                    <option value='large'>Large</option>
                                    <option value='medium'>Medium</option>
                                    <option value='small'>Small</option>
                                </select>
                            </div>
                        </div>
                        <div className="form form-bottom">
                            <button type='submit' className='btn' disabled={this.state.invalidForm}>Update Task</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateTaskPage;