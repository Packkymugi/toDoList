import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Todo from './Todo';
import axios from 'axios';

function TodoList() {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    const [toDo, setToDo] = useState([]);
    const [state, setState] = useState();
    
    function async(getTodo){
        const response = await axios.get('http://localhost:5000/todos/')
        return response
      }

    useEffect( () => {
        
        response = getTodo()
        
            
        setToDo(response.data)    
        console.log(toDo);
        })
        
        },[]);

    

    // const sortByEarliest = () => {
    //     const newList = [...state.list.sort]((a, b) =>  a.createAt - b.createAt;
    //     setState({...state.list: newList });
    //     });

    // const sortByLatest = () => {
    //     const newList = [...state.list.sort]((a, b) => b.createAt - a.createAt;
    //     setState({ list: newList });

    // });

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <label>key=index</label>
            <div>
                <button >Add new to start</button>
                <button >Add new to end</button>
                <button >Sort by Earliest</button>
                <button >Sort to Latest</button>

            </div>
            <div >
                <table className="table table-success table-striped-columns"  >
                    <thead >
                        <tr style={{ textAlign: "center" }}>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Create at</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;

