import React, { Component } from 'react';

import Todo from './Todo';

export class TodoList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         list : [],
      }
    }

    addToEnd = (event) => {
        let newCount = this.state.count ;
        const  newList = [ ...this.state.list ,
            {id : newCount,
            item: 'xxx',
            createAt: new Date(),
            }
        ];
        newCount = newCount + 1;
        this.setState({list: newList , count: newCount });

        console.log(this.state.list);


    }

    addToStart = (event) => {
        let newCount = this.state.count ;
        const  newList = [ 
            {id : newCount,
            item: 'xxx',
            createAt: new Date(), 
            },  ...this.state.list
        ];
        newCount = newCount + 1;
        this.setState({list: newList , count: newCount });
    }

    deleteRow = (index) => {
        this.state.list.splice(index,1);
        const newList = [...this.state.list];
        
        this.setState({list: newList});
    }

    changeRow = (index , newItem) => {
        /*const newList = [...this.state.list];
        newList[index] = newItem;
        this.setState({list: newList});
        */
        this.state.list[index] = newItem;
        this.setState({list: this.state.list});

    }

    sortByEerliest = () => {
        const newList =  this.state.list.sort((a,b) =>{
            return a.createAt - b.createAt;
        });
        this.setState({list: newList});
    }
    sortByLatest = () => {
        const newList =  this.state.list.sort((a,b) =>{
            return b.createAt - a.createAt;
        });
        this.setState({list: newList});
    }
    
    todo = {
        id : 0,
        item: '',
        createAt: new Date(),
    }

    
  
  render() {
    const tdList = this.state.list.map( (item, index)  => 
        <Todo key={item.id} data={item} index={index}  deleteHandler={this.deleteRow}  changeHandler = {this.changeRow}></Todo>
    );
    //console.log(tdList);

    return (
      <div className="center">
        <label>key=index</label>
        <div>
            <button onClick={this.addToStart}>Add new to start</button>
            <button onClick={this.addToEnd}>Add new to end</button>
            <button onClick={this.sortByEerliest}>Sort by Earliest</button>
            <button onClick={this.sortByLatest}>Sort to Latest</button>
        </div>
        <div >
            <table className="center">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Create at</th>
                    </tr>
                </thead>
                <tbody>
                    {tdList}
            
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default TodoList;

