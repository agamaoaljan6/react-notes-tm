import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }

    onChange = (e) => this.setState({[e.target.name]:e.target.value})
    // e.target.value is whatever the value you type on input
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                style={{flex:'10', padding: '5px'}}
                type="text" 
                name="title" 
                placeholder="Add todo..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
