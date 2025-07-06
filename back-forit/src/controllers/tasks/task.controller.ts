import { Request, Response } from "express";
import { MethodsController } from "../../lib/interfaces/methods-controller";
import { TaskMethods } from "../../models/task/interface/task.interface";
export class TaskController implements MethodsController {

  private readonly task: TaskMethods;

  constructor(task: TaskMethods) {
    this.task = task
  }

  async create(req: Request, res: Response): Promise<void> {

    const response = await this.task.create(req.body);

    res.status(response.statusCode).json(response);
  }

  async getAll(req: Request, res: Response): Promise<void> {

    const response = await this.task.getAll();

    res.status(response.statusCode).json(response);
  }

  async finOne(req: Request, res: Response): Promise<void> {

    const response = await this.task.finOne(parseInt(req.params.id));

    res.status(response.statusCode).json(response);
  }
  async update(req: Request, res: Response): Promise<void> {
    const response = await this.task.update(parseInt(req.params.id), req.body);
    res.status(response.statusCode).json(response);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const response = await this.task.delete(parseInt(req.params.id));

    res.status(response.statusCode).json(response);
  }

}