import React, { Component } from 'react';

export class Todo22 extends Component {

  deleteRow = () => {
    this.props.deleteHandler(this.props.index);
  }

  changeItem = (event) => {
    console.log(event);
    
    const newItem = {
        id : this.props.data.id,
        item: event.target.value,
        createAt: this.props.data.createAt,
    }
    this.props.changeHandler(this.props.index, newItem);

  }
  render() {
    const {index, data} = this.props;

    return (
    <tr>
        <td>{index}</td>
        <td>{data.id}</td>
        <td><input type="text" value={data.item}  onChange={this.changeItem} ></input></td>
        <td>{data.createAt.toLocaleTimeString()} 
        <button onClick={this.deleteRow}>Delete</button>
        </td>
    </tr>
    );
  }
}

export default Todo22;
