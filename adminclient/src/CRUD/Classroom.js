import axios from "./../axios";

const getAll = () => {
    return axios.get("/classroom/all");
}

const get = id => {
    return axios.get(`/classroom/${id}`);
}

const create = data =>{
    return axios.post("/classroom/new",data);
}

const update = (id, data) => {
    return axios.put(`/classroom/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/classroom/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}