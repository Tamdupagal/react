import axios from "./../axios";

const getAll = () => {
    return axios.get("/students/all");
}

const get = id => {
    return axios.get(`/students/${id}`);
}

const create = data =>{
    return axios.post("/students/new",data);
}

const update = (id, data) => {
    return axios.put(`/students/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/students/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}