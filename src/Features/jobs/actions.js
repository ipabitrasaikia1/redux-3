import { GET_TODO_FAIL, GET_TODO_LOADING, GET_TODO_SUCCESS, ADD_TODO_FAIL, ADD_TODO_LOADING, ADD_TODO_SUCCESS, } from "./actionTypes"

export const gettodo_loading = () => (
    {
        type: GET_TODO_LOADING,
    }
)

export const gettodo_success = (data) => (
    {
        type: GET_TODO_SUCCESS,
        payload: data
    }
)

export const gettodo_fail = () => (
    {
        type: GET_TODO_FAIL,
    })


export const addtodo_loading = () => (
    {
        type: ADD_TODO_LOADING,
    })


export const addtodo_success = (data) => (
    {
        type: ADD_TODO_SUCCESS,
        payload: data
    }
)


export const addtodo_fail = () => (
    {
        type: ADD_TODO_FAIL,
    }
)

export const getData1 = () => (dispatch) => {

    dispatch(gettodo_loading())
    fetch("http://localhost:3005/todo")
        .then((d) => d.json())
        .then((res) =>
            // console.log("RES :", res)
            dispatch(gettodo_success(res))
        )
        .catch((e) => dispatch(gettodo_fail()))
}