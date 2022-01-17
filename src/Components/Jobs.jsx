import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData1 } from "../Features/jobs/actions";



export const Todos = () => {
    const dispatch = useDispatch()

    const { loading, todo, error } = useSelector((state) => ({ loading: state.TodosState.loading, todo: state.TodosState.todo, error: state.TodosState.error }))
    const [text, setText] = useState({});

    useEffect(() => { getData() }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setText({
            ...text,
            [name]: value
        })
    }
    const handleSubmit = () => {
        console.log(text)

        fetch("http://localhost:3005/todo", {
            method: "POST",
            body: JSON.stringify(text),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {

            getData()
        });

    }
    const getData = () => {
        dispatch(getData1());

    }

    const handleEdit = (e) => {

        console.log(e)

    }
    const handleDelete = (e) => {
        console.log(e.target)
    }

    return loading ? <div>loading....</div> : error ? <div>Something went wrong </div> : <div className="todo">

        <div className="todo-input" >
            <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
            <input type="text" name="jobTitle" placeholder="Job title" onChange={handleChange} />
            <input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleChange} />
            <input type="text" name="jobDescription" placeholder="Job description" onChange={handleChange} />
            <input type="text" name="jobType" placeholder="Job type" onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} />
            <button type="submit" onClick={(e) => { handleSubmit() }}> Add Job </button>
        </div>
        <div className="todo-output">


        </div>

    </div >
}