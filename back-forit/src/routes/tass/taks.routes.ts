import { Router } from "express";
import { MethodsController } from "../../lib/interfaces/methods-controller";

export const taskRouter = (taskController: MethodsController) => {

  const routes = Router();

  routes.get('/', (req, res) => { taskController.getAll(req, res) });

  routes.get('/:id', (req, res) => { taskController.finOne(req, res) });

  routes.post('/', (req, res) => { taskController.create(req, res) });

  routes.patch('/:id', (req, res) => { taskController.update(req, res) });

  routes.delete('/:id', (req, res) => { taskController.delete(req, res) });

  return routes;

}