import { StateResponse, StateResponseData } from "../../../lib/interfaces/state.response.interface";
import { Task } from "../task.model";

export interface UpdateTask {
  title: string
  description: string,
  completed: boolean
}



export interface ResponseSuccess {
  statusCode: number;
  message: string
}

export interface ResponseSuccessData<T> {
  data: T;
}



export interface TaskMethods {
  create(task: Task): Promise<StateResponse>
  update(id: number, task: UpdateTask): Promise<StateResponse>
  delete(id: number): Promise<StateResponse>
  getAll(): Promise<StateResponseData<Task[]>>
  finOne(id: number): Promise<StateResponseData<Task>>
}