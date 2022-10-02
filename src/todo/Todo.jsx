import { useState } from 'react';
import './Todo.css';

function Todo() {
    const [item, setItem] = useState([
        {key: 1, text: 'Learn JavaScript', done: false},
        {key: 2, text: 'Learn JavaScript', done: false},
        {key: 3, text: 'Learn JavaScript', done: false},
    ])
    return (
        <div>
            {item.map(item => (
                <Item item={item}/>
            ))}
        </div>
    )
}

function Input(params) {
}

function Nav(params) {
}

function Item({item}) {
    return (
        <label>
            <input type="checkbox" name="" id="" />
                {item.text} + {item.key}
        </label>
    )
}


export default Todo;
