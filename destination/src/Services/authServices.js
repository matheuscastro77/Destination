import axios from "axios";

export const country = (data) => axios.get(`https://amazon-api.sellead.com/country`, data);
