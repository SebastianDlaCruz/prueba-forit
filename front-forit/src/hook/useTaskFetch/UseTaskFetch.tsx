import { useEffect, useState } from "react"
import type { CreateTask, ResponseHttpData, Task } from "../../models"
import type { TaskMethods } from "../../services/task/task.interface"
interface Props {
  httpMethod: TaskMethods
  id?: number
}
export const UseTaskFetch = ({ httpMethod, id }: Props) => {



  const [tasks, setTasks] = useState<Task[]>([]);

  const [task, setTask] = useState<Task>({
    id: 0,
    completed: false,
    createAd: '',
    description: '',
    title: ''
  });

  const getTask = async () => {

    try {

      const res = await httpMethod.getFind()

      if (!res.ok) throw new Error('Error al obtener las tareas');

      const resHttp = await res.json() as ResponseHttpData<Task[]>;

      const { data } = resHttp;
      console.log(data);
      setTasks([
        ...tasks,
        ...data
      ])

    } catch (e) {
      console.error(e);
    }

  }

  const getFindOne = async (id: number) => {
    try {

      const res = await httpMethod.getFindOne(id)

      if (!res.ok) throw new Error('Error al obtener la tarea');
      const data = await res.json() as ResponseHttpData<Task>;

      setTask({ ...task, ...data.data });

    } catch (error) {
      console.log(error)
    }
    ;
  }

  const create = async (task: CreateTask) => {

    try {
      const res = await httpMethod.create(task);

      if (!res.ok) throw new Error('Error al crear la tarea');

      const data = await res.json() as ResponseHttpData<Task>;


      setTasks([
        ...tasks,
        data.data
      ])

    } catch (error) {
      console.log(error)
    }

  }


  const update = async (id: number, task: CreateTask) => {
    try {
      const response = await httpMethod.update(id, task)

      if (!response.ok) throw new Error('Error al actualizar la tarea');

      const updateTask = tasks.find((t) => t.id === id);

      setTasks(tasks.map((t) => t.id === id ? {

        createAd: updateTask?.createAd || '',
        completed: task.completed,
        description: task.description,
        id,
        title: task.title

      } : t));

    } catch (error) {

      console.log(error);

    }
  }

  const deleteTask = async (id: number) => {

    try {

      const res = await httpMethod.delete(id);

      if (!res.ok) throw new Error('Error al eliminar la tarea');

      setTasks(tasks.filter((t) => t.id !== id));

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    if (!id) getTask();

    if (id) getFindOne(id);

  }, [])


  return { tasks, deleteTask, create, setTasks, task, setTask, getFindOne, update };

}