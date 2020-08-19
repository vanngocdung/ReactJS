import http from "./axiosHttp";

const getAll = () => {
    return http.get("/comments");
};

const get = id => {
    return http.get(`/comments/${id}`);
};

const create = data => {
    return http.post("/comments", data);
};

const update = (id, data) => {
    return http.put(`/comments/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/comments/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};