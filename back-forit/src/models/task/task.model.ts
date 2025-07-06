import { InternalServerError } from "../../lib/errors/internal-server/internal-server.error";
import { NotFoundError } from "../../lib/errors/not-found/not-found.error";
import { StateResponse, StateResponseData } from "../../lib/interfaces/state.response.interface";
import { generateRandomNumber } from "../../lib/utils/generate-random-number.util";
import { FileService } from "../../services/file/file.service";
import { TaskMethods, UpdateTask } from "./interface/task.interface";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAd: Date;
}


export class TaskModel implements TaskMethods {

  private readonly fileService = new FileService();

  constructor() { }

  async finOne(id: number): Promise<StateResponseData<Task>> {
    try {

      const file = await this.fileService.read();
      const tasks = JSON.parse(file) as Task[];

      const task = tasks.find((t) => t.id === id);

      if (!task) throw new NotFoundError('Tarea no encontrada');


      return { statusCode: 200, message: "Tarea encontrada", success: true, data: task };

    } catch (error) {
      if (error instanceof NotFoundError) throw error;
      throw new InternalServerError('Error al obtener la tarea');
    }
  }

  async create(task: Task): Promise<StateResponseData<Task>> {
    try {

      const file = await this.fileService.read();
      const tasks = JSON.parse(file) as Task[];
      task.id = generateRandomNumber();
      task.createAd = new Date();
      const newTasks = [...tasks, task];
      await this.fileService.write(newTasks);

      return { statusCode: 200, message: "Tarea creada correctamente", success: true, data: task };

    } catch {

      throw new InternalServerError('Error al crear la tarea');

    }
  }
  async update(id: number, task: UpdateTask): Promise<StateResponse> {

    try {
      const tasks = await this.fileService.read();

      const parseTasks = JSON.parse(tasks) as Task[];

      const findTask = parseTasks.find((t) => t.id === id);

      if (!findTask) {
        throw new NotFoundError('Tarea no encontrada');
      }

      const newTasks = parseTasks.map((t) => t.id === id ? { ...t, ...task } : t);

      await this.fileService.write(newTasks);

      return {
        statusCode: 200,
        message: "Tarea actualizada correctamente",
        success: true
      }
    } catch (error) {

      if (error instanceof NotFoundError) throw error;

      throw new InternalServerError('Error al actualizar la tarea');
    }
  }


  async delete(id: number): Promise<StateResponse> {
    try {
      const tasks = await this.fileService.read();

      const parseTasks = JSON.parse(tasks) as Task[];


      if (!parseTasks) {
        throw new NotFoundError('Tarea no encontrada');
      }

      const newTask = parseTasks.filter((t) => t.id !== id);

      await this.fileService.write(newTask);

      return {
        statusCode: 200,
        message: 'Tarea eliminada correctamente',
        success: true
      }

    } catch (error) {

      if (error instanceof NotFoundError) throw error;
      throw new InternalServerError('Error al eliminar la tarea');
    }
  }


  async getAll(search?: string): Promise<StateResponseData<Task[]>> {

    try {


      const fail = await this.fileService.read();

      const tasks = JSON.parse(fail) as Task[];

      return {
        statusCode: 200,
        message: 'Éxito',
        success: true,
        data: tasks
      }

    } catch {

      throw new InternalServerError('Error al obtener las tareas');
    }
  }

}