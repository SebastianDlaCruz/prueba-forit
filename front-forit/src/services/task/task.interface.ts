import type { CreateTask } from "../../models";

export interface TaskMethods {
  create(task: CreateTask): Promise<Response>;
  update(id: number, task: CreateTask): Promise<Response>;
  delete(id: number): Promise<Response>;
  getFind(): Promise<Response>;
  getFindOne(id: number): Promise<Response>;
}