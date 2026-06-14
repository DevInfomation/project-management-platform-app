import axios from "axios";

export const UsersRepository = {
    createUser: (createdUser) => {
        return axios({
            url: `http://localhost:8080/api/v1/users/createUser`,
            method: "POST",
            data: createdUser,
        });
    },

    fetchAllUsers: () => {
        return axios({
            url: `http://localhost:8080/api/v1/users/fetchUsers`,
            method: "GET",
        });
    },
};