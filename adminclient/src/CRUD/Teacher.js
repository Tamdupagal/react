import axios from "./../axios";

const getAll = () => {
    return axios.get("/teachers/all");
}

const get = id => {
    return axios.get(`/teachers/${id}`);
}

const create = data =>{
    return axios.post("/teachers/new",data);
}

const update = (id, data) => {
    return axios.put(`/teachers/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/teachers/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}