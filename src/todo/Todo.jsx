import { useState } from 'react';
import './Todo.css';

function Todo() {
    const [item, setItem] = useState([])

    const handleDelete = i => {
        setItem(item.filter((item,index) => (index !== i)));
    }

    const handleAdd = text =>{
        setItem([...item, { text, done: false }])
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <Input onAdd={handleAdd}/>
            {item.map((item, index) => (
                <Item item={item} index={index} deleteItem={handleDelete}/>
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

function Item({item, deleteItem, index}) {
    const [check, setCheck] = useState();
    const handleChange = () => setCheck(item.done = !item.done);

    const handleDelete = () => {
        deleteItem(index);
    };

    return (
        <div className='task_component'>
            <input type="checkbox" name="" id="" onChange={handleChange} value={check}/>
            Task {index+1}:{item.text}
            {check ? <label>Done</label> : ""}
            <button type='submit' onClick={handleDelete}>X</button>
        </div>
    )
}


export default Todo;
