import { BottomNavigation, Button, Checkbox, Container, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from 'react';
import './Todo.css';
import { ClassNames } from '@emotion/react';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [item, setItem] = useState([])

    const handleDelete = i => {
        setItem(item.filter((item) => (item.id !== i)));
    }

    const handleAdd = (text, value)=>{
        setItem([...item, { id:getKey(), text, done: false, value}]);
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
        <Container fixed>
            <h1>Todo App</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <Filter changeFilter={handleFilter} value={filter}/>
                        <Input onAdd={handleAdd}/>
                    </TableHead>
                    <TableBody>
                        {displayItem.map((item, index) => (
                            <Item item={item} index={index} deleteItem={handleDelete} checkChenge={handleChange} editText={handleEditText}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

function Input({onAdd}) {
    const [text, setText] = useState('');
    const textChange = (e) => setText(e.target.value);
    const submitItem = () => {
        onAdd(text, value);
        setText('');
        setValue(null);
    }

    const [value, setValue] = useState(null);

    return(
        <>
        <TableRow>
            <TableCell colSpan={5}>
                <TextField label="Add your Task" variant="standard" onChange={textChange} value={text} fullWidth/>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={4} align='right'>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} variant="standard" />}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell colSpan={1}>
            <Button onClick={submitItem} fullWidth><AddCircleRoundedIcon/></Button>
            </TableCell>
        </TableRow>
        </>
    );
}

function Filter({changeFilter}) {
    const handleFilter = (key, e) => {
        e.preventDefault();
        changeFilter(key)
    }

    return (
        <TableRow>
            <TableCell colSpan={5}>
                <Tabs variant="fullWidth">
                    <Tab label='All' onClick={handleFilter.bind(null, 'ALL')} />
                    <Tab label='ToDo' onClick={handleFilter.bind(null, 'TODO')} />
                    <Tab label='Done' onClick={handleFilter.bind(null, 'DONE')} />
                </Tabs>
            </TableCell>
        </TableRow>
    );
}

function Item({item, deleteItem, checkChenge, editText}) {
    const [text, setText] = useState('');
    const textChange = (e) => setText(e.target.value)

    const handleDelete = () => {
        deleteItem(item.id);
    };

    const handleChange = () => {
        checkChenge(item.id);
    }

    const [isEdit, setIsEdit] = useState(false);

    const startEdit = () => {
        setText(item.text);
        setIsEdit(true);
    }

    const endEdit = () => {
        editText(item.id, text);
        setIsEdit(false);
    }

    const [value, setValue] = useState(item.value);

    return (
        <TableRow component="th" className='task_component'>
            <TableCell>
            <Checkbox color='success' onChange={handleChange} checked={item.done}/>
            </TableCell>
            <TableCell>
            {isEdit? <TextField label="Edit your Task" variant="standard" onChange={textChange} value={text} fullWidth/>: item.text}
            </TableCell>
            <TableCell>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} variant="standard" />}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell align='right'>
            {!isEdit?<Button type='submit' onClick={startEdit}><ModeEditIcon/></Button>:<Button color="secondary" type='submit' onClick={endEdit}><ModeEditIcon /></Button>}
            </TableCell>
            <TableCell>
            <Button type='submit' onClick={handleDelete}><DeleteIcon/></Button>
            </TableCell>
        </TableRow>
    )
}

export default Todo;
