import { useState } from 'react';
import './Todo.css';
const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [item, setItem] = useState([])

    const handleCheck = checked => {
        const newItem = item.map(item => {
            if (item.key === checked.key){
                item.done = !item.done;
            }
            return item;
        })
        setItem(newItem);
    }

    const handleDelete = i => {
        setItem(item.filter((item,index) => (index !== i)));
    }

    const handleAdd = text =>{
        setItem([...item, { key: getKey(), text, done: false }])
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <Input onAdd={handleAdd}/>
            {item.map((item, index) => (
                <Item item={item} index={index} checkedItem={handleCheck} key={item.key} deleteItem={handleDelete}/>
            ))}
        </div>
    )
}

function Input({onAdd}) {
    const [text, setText] = useState('');
    const textChange = (i) => setText(i.target.value)
    const submitItem = () => {
        onAdd(text);
        setText('');
    }
    return(
        <div className='input'>
            <input type="text" onChange={textChange} value={text}/>
            <button type="submit" onClick={submitItem}>作成</button>
        </div>
    );
}

function Item({item, checkedItem, deleteItem, index}) {
    const handleChange = () => {
        checkedItem(item);
    };

    const handleDelete = () => {
        deleteItem(index);
    };

    return (
        <div className='task_component'>
            <input type="checkbox" name="" id="" onChange={handleChange}/>
            Task {index+1}:{item.text}
            {item.done ? <label>Done</label> : ""}
            <button type='submit' onClick={handleDelete}>X</button>
        </div>
    )
}


export default Todo;
