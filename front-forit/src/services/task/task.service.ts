import type { CreateTask } from "../../models";
import type { TaskMethods } from "./task.interface";

/** 
 * @description Servicio de tareas , se encarga de las consultas http del servidor
 * 
*/

export class TasksService implements TaskMethods {
  private readonly API = "http://localhost:3000/api/v1";
  private path: string;

  constructor(path: string) {
    this.path = path;
  }
  create(task: CreateTask): Promise<Response> {
    return fetch(`${this.API}/${this.path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  }
  update(id: number, task: CreateTask): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  }
  delete(id: number): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`, {
      method: 'DELETE'
    })
  }
  getFind(): Promise<Response> {
    return fetch(`${this.API}/${this.path}`)
  }

  getFindOne(id: number): Promise<Response> {
    return fetch(`${this.API}/${this.path}/${id}`)
  }
}