import axios from "axios";

const employeeAmount = Math.floor(Math.random() * 20 + 10)
const URL = `https://randomuser.me/api/?results=${employeeAmount}`

export default {
        getEmps: function () {
                return axios.get(URL);
        }
}