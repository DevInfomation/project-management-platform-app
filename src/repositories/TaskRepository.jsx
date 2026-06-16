import axios, { create } from "axios";

export const TaskRepository = {
    createTask: (createTask) => {
        return axios({
            url: `http://localhost:8080/api/v1/tasks/createTask`,
            method: "POST",
            data: createTask
        });
    },

    fetchAllTasks: () => {
        return axios({
            url: `http://localhost:8080/api/v1/tasks/fetchAllTasks`,
            method: "GET"
        });
    },
};