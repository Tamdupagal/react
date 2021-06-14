import axios from "./../axios";

const getAll = () => {
    return axios.get("/api/teachers/all");
}

const get = id => {
    return axios.get(`/api/teachers/${id}`);
}

const create = data =>{
    return axios.post("/api/teachers/new",data);
}

const update = (id, data) => {
    return axios.put(`/api/teachers/update/${id}`,data)
}

const remove = id => {
    return axios.delete(`/api/teachers/${id}`)
}

export default {
    getAll,
    get,
    create,
    update,
    remove
}