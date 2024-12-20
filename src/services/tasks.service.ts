import customAxios from "@/utils/customAxios";
import { ITaskCreateResquest, ITaskUpdateRequest } from "@/types";


export async function getTasks() {
    const response = await customAxios.get("/tasks");
    return response
}

export async function createTask(req: ITaskCreateResquest) {
    const response = await customAxios.post("/tasks", req);
    return response
}

export async function updateTask(req: ITaskUpdateRequest, taskId: number) {
    const response = await customAxios.put(`/tasks/${taskId}`, req);
    return response
}

export async function deleteTask( taskId: number) {
    const response = await customAxios.delete(`/tasks/${taskId}`);
    return response
}