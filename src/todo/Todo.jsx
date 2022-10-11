import { useState } from 'react';
import styles from './Todo.module.css';
import {Button, Checkbox, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';


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
            <h1>Todo App Edit</h1>
            <Input onAdd={handleAdd}/>
            <div className={styles.item_list}>
                <Filter changeFilter={handleFilter} filter={filter}/>
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
    const { register, handleSubmit, getValues, setValue, formState:{errors}} = useForm();

    const submitItem = () => {
        onAdd(getValues('task'), getValues('date'));
        setValue('task', '');
        setValue('date', '');

    }

    return(
        <div className={styles.input_container}>
            <IconButton className={styles.check_btn} type="submit" onClick={handleSubmit(submitItem)} color='primary'><AddCircleIcon /></IconButton>
            <div className={styles.input_box}>
                <input type="text" placeholder="Create new todo ..." {...register('task', {required: 'fill in todo'})}/>
                {errors.task ? <p className={styles.error_message}>{errors.task.message}</p>:'' }
            </div>
            <div className={styles.input_box}>
                <input type="date" {...register('date', {required: 'fill in date'})}/>
                {errors.date ? <p className={styles.error_message}>{errors.date.message}</p>:'' }
            </div>
        </div>
    );
}

function Filter({changeFilter, filter}) {
    const handleFilter = (key, e) => {
        e.preventDefault();
        changeFilter(key)
    }

    return (
        <nav className={styles.filter_component}>
            <Button variant={filter === 'ALL' ? 'contained' : 'text'} onClick={handleFilter.bind(null, 'ALL')}>All</Button>
            <Button variant={filter === 'TODO' ? 'contained' : 'text'} onClick={handleFilter.bind(null, 'TODO')}>ToDo</Button>
            <Button variant={filter === 'DONE' ? 'contained' : 'text'} onClick={handleFilter.bind(null, 'DONE')}>Done</Button>
        </nav>
    );
}

function Item({item, deleteItem, checkChenge, editText}) {
    const { register, handleSubmit, getValues, setValue, formState:{errors} } = useForm();

    const handleDelete = () => {
        deleteItem(item.id);
    };

    const handleChange = () => {
        checkChenge(item.id);
    }

    const [isEdit, setIsEdit] = useState(false);

    const startEdit = () => {
        setValue('task',item.text);
        setValue('date', item.date);
        setIsEdit(true);
    }

    const endEdit = () => {
        editText(item.id, getValues('task'), getValues('date'));
        setIsEdit(false);
    }

    return (
        <li className={styles.item_container}>
            <Checkbox icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon color='success'/>} className={styles.check_btn} onChange={handleChange} checked={item.done}/>
            <div className={styles.box_edit}>
                {isEdit? <input type="text" {...register('task', {required: 'fill in todo'})} placeholder="Edit your todo ..."/>: <p className={item.done? styles.sentence_done :''}>{item.text}</p> }
                {errors.task ? <p className={styles.error_message}>{errors.task.message}</p>:'' }
            </div>
            <div className={styles.box_edit}>
                {isEdit? <input type="date" {...register('date', {required: 'fill in date'})}/>: <p className={item.done? styles.sentence_done :''}>{item.date}</p> }
                {errors.date ? <p className={styles.error_message}>{errors.date.message}</p>:'' }
            </div>
            <div className={styles.edit_icon}>
            {!isEdit?<IconButton type='submit' onClick={startEdit}><BorderColorOutlinedIcon /></IconButton>:<IconButton type='submit' onClick={handleSubmit(endEdit)}><BorderColorIcon color='success'/></IconButton>}
            <IconButton type='submit' onClick={handleDelete}><DeleteIcon /></IconButton>
            </div>

        </li>
    )
}

export default Todo;
