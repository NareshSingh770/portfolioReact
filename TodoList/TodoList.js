import React, { useState, useEffect } from 'react'
import List from './List'

const getlocalData = () => {
    const allData = localStorage.getItem('ToDoList');
    if (allData) {
        return JSON.parse(allData);
    }
    else {
        return []
    }
}
const TodoList = () => {

    const [text, setText] = useState('');
    const [list, setList] = useState(getlocalData);


    const inputEvent = (e) => {
        setText(e.target.value);
    }

    const addList = () => {

        if (text) {
            const listsAdd = {
                id: new Date().getTime().toString(),
                name: text,
            };
            console.log(listsAdd);
            setList([...list, listsAdd]);
            setText('');
        } else {
            alert("Cann't add empty item");
        }
    }
    const deleteLists = (id) => {
        setList((oldList) => {
            return oldList.filter((val) => {
                return val.id !== id;
            })
        })
    }

    const deleteAll = () => {
        setList([])
    }
    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(list));
    }, [list])
    return (
        <>
            <div className="card todo-list-wrap">
                <div className="card-header"><h4>Add Items in TODO List</h4></div>
                <div className="card-body">
                    <label>Enter Items</label>
                    <input type="text" className='form-control' value={text} onChange={inputEvent} />
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-primary" onClick={addList}>Add</button>
                </div>
            </div>
            <div className='text-center mb-5'>
                <button className="btn btn-outline-danger" onClick={deleteAll}>Delete All</button>
            </div>
            {
                list.map((val, ind) => {
                    return (
                        <List key={ind} id={val.id} list={val.name} deleteList={deleteLists} />
                    )

                })
            }



        </>
    )
}

export default TodoList;