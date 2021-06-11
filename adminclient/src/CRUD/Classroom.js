import axios from "./../axios";

const getAll = () => {
    return axios.get("/api/classroom/all");
}

const get = id => {
    return axios.get(`/api/classroom/${id}`);
}

const create = data =>{
    return axios.post("/api/classroom/new",data);
}

const update = (id, data) => {
    return axios.put(`/api/classroom/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/api/classroom/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}