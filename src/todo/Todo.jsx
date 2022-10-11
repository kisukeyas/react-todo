import { useState } from 'react';
import styles from './Todo.module.css';
import { Button, Checkbox, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [item, setItem] = useState([])

    const handleDelete = i => {
        setItem(item.filter((item) => (item.id !== i)));
    }

    const handleAdd = (text, date)=>{
        setItem([...item, { id:getKey(), text, done: false, date}]);
    }

    const handleEditText = (i, text, date) => setItem(item.map(item => {
            if (item.id === i) {
                item.text = text;
                item.date = date;
            };
            return item;
    }));

    const handleChange = i => setItem(item.map(item => {
        if (item.id === i) {
            item.done = !item.done
        };
        return item
    }));

    const [filter, setFilter] = useState('ALL');

    const handleFilter = value => setFilter(value);

    const displayItem = item.filter(item => {
            switch (filter) {
                case 'ALL':
                    return true;
                case 'TODO':
                    return !item.done;
                case 'DONE':
                    return item.done;
                default:
                    return item;
            }
        });

    return (
        <main className={styles.container}>
            <h1>Todo App</h1>
            <Input onAdd={handleAdd}/>
            <div className={styles.item_list}>
                <Filter changeFilter={handleFilter} value={filter}/>
                <ul>
                    {displayItem.map((item, index) => (
                        <Item item={item} index={index} deleteItem={handleDelete} checkChenge={handleChange} editText={handleEditText}/>
                    ))}
                </ul>
            </div>
        </main>
    )
}

function Input({onAdd}) {
    const [text, setText] = useState('');
    const textChange = (e) => setText(e.target.value);
    const [date, setDate] = useState('');
    const dateChange = (e) => setDate(e.target.value);
    const submitItem = () => {
        onAdd(text, date);
        setText('');
        setDate('');
    }
    return(
        <div className={styles.input_container}>
            <IconButton className={styles.check_btn} type="submit" onClick={submitItem} color='primary'><AddCircleIcon /></IconButton>
            <input type="text" onChange={textChange} value={text} className={styles.text_box} placeholder="Create new todo ..."/>
            <input type="date" onChange={dateChange} value={date} className={styles.date_box}/>
        </div>
    );
}

function Filter({changeFilter}) {
    const handleFilter = (key, e) => {
        e.preventDefault();
        changeFilter(key)
    }

    return (
        <nav className={styles.filter_component}>
            <a href="#" onClick={handleFilter.bind(null, 'ALL')}>All</a>
            <a href="#" onClick={handleFilter.bind(null, 'TODO')}>ToDo</a>
            <a href="#" onClick={handleFilter.bind(null, 'DONE')}>Done</a>
        </nav>
    );
}

function Item({item, deleteItem, checkChenge, editText}) {
    const [text, setText] = useState('');
    const textChange = (i) => setText(i.target.value);
    const [date, setDate] = useState('');
    const dateChange = (e) => setDate(e.target.value);

    const handleDelete = () => {
        deleteItem(item.id);
    };

    const handleChange = () => {
        checkChenge(item.id);
    }

    const [isEdit, setIsEdit] = useState(false);

    const startEdit = () => {
        setText(item.text);
        setDate(item.date);
        setIsEdit(true);
    }

    const endEdit = () => {
        editText(item.id, text, date);
        setIsEdit(false);
    }

    return (
        <li className={styles.item_container}>
            <Checkbox icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon color='success'/>} className={styles.check_btn} onChange={handleChange} checked={item.done}/>
            <div>
                {isEdit? <input type="text" onChange={textChange} value={text} className={styles.text_box} placeholder="Create new todo ..."/>: item.text}
            </div>
            <div>
                {isEdit? <input type="date" onChange={dateChange} value={date} className={styles.date_box}/>: item.date}
            </div>
            {!isEdit?<IconButton type='submit' onClick={startEdit}><BorderColorOutlinedIcon /></IconButton>:<IconButton type='submit' onClick={endEdit}><BorderColorIcon color='success'/></IconButton>}
            <IconButton type='submit' onClick={handleDelete}><DeleteIcon /></IconButton>
        </li>
    )
}

export default Todo;
