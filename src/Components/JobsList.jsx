import { useSelector, useDispatch } from "react-redux";

export const JobsList = () => {

    const { loading, todo, error } = useSelector((state) => ({ loading: state.TodosState.loading, todo: state.TodosState.todo, error: state.TodosState.error }))

    const handleEdit = (e) => {
        alert(e)
    }
    const handleDelete = (e) => {
        alert(e)
    }

    return <div>
        <div className="todo-output">

            <table className="table">
                <thead>  <tr>  <td> JobTitle</td><td>Company Name</td> <td>Salary Range</td>  <td>Job Description</td> <td>location</td> <td>Job Type</td> <td >Status</td> </tr> </thead>
                <tbody>

                    {todo.map((e) => <tr>  <td> {e.jobTitle}</td><td>{e.companyName}</td> <td>{e.salaryRange}</td>  <td>{e.jobDescription}</td> <td>{e.location}</td> <td>{e.jobType}</td> <td onClick={() => { handleEdit(e.id) }}>Apply</td> </tr>)}
                </tbody>

            </table>

        </div>

    </div>
}