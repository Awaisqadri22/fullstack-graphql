import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => error);
};

const create = (newObject) => {
  axios
    .post(baseUrl, newObject)
    .then((response) => response.data)
    .catch((error) => console.log("Error", error));
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
  getAll,
  create,
  update,
};
