import axios from "./../axios";

const getAll = () => {
    return axios.get("/api/students/all");
}

const get = id => {
    return axios.get(`/api/students/${id}`);
}

const create = data =>{
    return axios.post("/api/students/new",data);
}

const update = (id, data) => {
    return axios.put(`/api/students/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/api/students/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}