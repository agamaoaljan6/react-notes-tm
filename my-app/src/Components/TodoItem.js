import React, { Component } from 'react'
import propTypes from 'prop-types'


export class TodoItem extends Component {
    getStyle = () => {
        // Ternary Operator
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        // LONGER VERSION
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                {title}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// propTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
