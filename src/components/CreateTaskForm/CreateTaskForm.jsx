
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreateTaskForm.scss';


class CreateTaskForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            color: '',
            size: '',
            date: '',
            completed: false
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleCreateTask(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <div className="CreateTask form-page">
                <div className="form form-form">
                    <h1>Create A Task</h1>
                    <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input name='name' value={this.state.formData.name} onChange={this.handleChange} placeholder="Task Description" required />
                        </div>
                        <div className="dropdowns">
                            <div className="form-group">
                                <select name="color" value={this.state.formData.color} onChange={this.handleChange} className="color-options custom-select">
                                    <option value='select'>Select a Color</option>
                                    <option className='red-task' value='red-task'>Red</option>
                                    <option value='orange-task'>Orange</option>
                                    <option value='yellow-task'>Yellow</option>
                                    <option value='blue-task'>Blue</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name='size' value={this.state.formData.size} onChange={this.handleChange} className='custom-select' >
                                    <option>Select a Size</option>
                                    <option value='large'>Large</option>
                                    <option value='medium'>Medium</option>
                                    <option value='small'>Small</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select name='date' value={this.state.formData.date} onChange={this.handleChange} className='custom-select' >
                                    <option>Today</option>
                                </select>
                            </div>
                        </div>
                        <div className="form form-bottom">
                            <button type='submit' className='btn' disabled={this.state.invalidForm}>Create Task</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateTaskForm;