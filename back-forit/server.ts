import cors from 'cors';
import { Router } from "express";
import { TaskController } from './src/controllers/task/task.controller';
import { TaskModel } from './src/models/task/task.model';
import { taskRouter } from './src/routes/task/taks.routes';

interface ProviderRouter {
  path: string;
  controller: any;
  model: any;
  generateRouter: (controller: any) => Router;
}


export interface ServerConfig<T> {
  port: number;
  connectionMethod?: () => Promise<T>;
  corsMethod: () => any;
  providerRouter: ProviderRouter[];
  textRunServer: string;

}

const { PORT } = process.env;
const path = '/api/v1';

export const serverConfig = {
  port: parseInt(process.env.PORT ?? '3000') ?? 3000,
  corsMethod: cors,
  providerRouter: [{
    path: `${path}/task-item`,
    model: TaskModel,
    controller: TaskController,
    generateRouter: taskRouter
  }],
  textRunServer: "live server in localhost"
}