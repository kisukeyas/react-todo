import { useState } from 'react';
import './Todo.css';
const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [item, setItem] = useState([
        {key: getKey(), text: 'Learn JavaScript', done: false},
        {key: getKey(), text: 'Learn JavaScript', done: false},
        {key: getKey(), text: 'Learn JavaScript', done: false},
    ])

    const handleCheck = checked => {
        const newItem = item.map(item => {
            if (item.key === checked.key){
                item.done = !item.done;
            }
            return item;
        })
        setItem(newItem);
    }

    return (
        <div>
            <Input item={item}/>
            {item.map(item => (
                <Item item={item} checkBox={handleCheck} key={item.key}/>
            ))}
        </div>
    )
}

function Input() {
    const [name, setItem] = useState('taro');
    const nameChange = (i) => setItem(i.target.value)
    return(
        <>
            <p>Hello {name}</p>
            <input type="text" onChange={nameChange}/>
        </>
    );
}

function Nav(params) {
}

function Item({item, checkBox}) {
    const handleChange = () => {
        checkBox(item);
    };
    return (
        <div>
            <input type="checkbox" name="" id="" onChange={handleChange}/>
            {item.key} : {item.text}
            {item.done ? <label>完了</label> : ""}
        </div>
    )
}


export default Todo;
