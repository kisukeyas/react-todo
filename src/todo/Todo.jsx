import { Button, Checkbox, Container, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import './Todo.css';

const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [item, setItem] = useState([])

    const handleDelete = i => {
        setItem(item.filter((item) => (item.id !== i)));
    }

    const handleAdd = (text, value)=>{
        setItem([...item, { id:getKey(), text, done: false, value}]);
    }

    const handleEditText = (i, text) => setItem(item.map(item => {
            if (item.id === i) {
                item.text = text;
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
                <Filter changeFilter={handleFilter} value={filter}/>
                </Table>
                <Table>
                    <TableHead>
                        <Input onAdd={handleAdd}/>
                        <TableRow>
                            <TableCell colSpan={1}>Check Box</TableCell>
                            <TableCell colSpan={6}>Task Name</TableCell>
                            <TableCell colSpan={2} align='right'>Limit Date</TableCell>
                            <TableCell colSpan={1} align='right'>Edit</TableCell>
                            <TableCell colSpan={1} align='right'>Delete</TableCell>
                        </TableRow>
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
        setValue('');
    }

    const [value, setValue] = useState('');

    return(
        <>
        <TableRow>
            <TableCell colSpan={11}>
                <TextField label="Add your Task" variant="standard" onChange={textChange} value={text} fullWidth/>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={1}></TableCell>
            <TableCell colSpan={8}></TableCell>
            <TableCell align='right' colSpan={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} variant="standard"/>}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell colSpan={1} align='right'>
            <Button onClick={submitItem} variant="contained" >Create Task</Button>
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
            <TableCell colSpan={4}>
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
            <TableCell colSpan={1}>
            <Checkbox color='success' onChange={handleChange} checked={item.done}/>
            </TableCell>
            <TableCell colSpan={4}>
            {isEdit? <TextField label="Edit your Task" variant="standard" onChange={textChange} value={text} fullWidth/>: item.text}
            </TableCell>
            <TableCell align='right' colSpan={4}>
            {isEdit?
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
                : item.value.$y+"年"+item.value.$M+"月"+item.value.$D+"日" }
            </TableCell>
            <TableCell align='right' colSpan={1}>
            {!isEdit?<Button type='submit' onClick={startEdit}><ModeEditIcon/></Button>:<Button color="secondary" type='submit' onClick={endEdit}><ModeEditIcon /></Button>}
            </TableCell>
            <TableCell align='right' colSpan={1}>
            <Button type='submit' onClick={handleDelete}><DeleteIcon/></Button>
            </TableCell>
        </TableRow>
    )
}

export default Todo;
