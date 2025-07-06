import { DynamicIcon } from 'lucide-react/dynamic';
import { dateTransform } from '../../../../adapters';
import { StateTask } from '../../../../components';
import type { Task } from '../../../../models';
import './table.css';

interface Props {
  tasks: Task[],
  deleteTask(id: number): void;
  viewTask(id: number): void;
  updateTask(id: number): void;
}
const Table = ({ tasks, deleteTask, viewTask, updateTask }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Completado</th>
            <th>Fecha de creación</th>
            <td>Opciones</td>
          </tr>
        </thead>

        <tbody>
          {
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td> <StateTask completed={task.completed} /> </td>
                <td>{dateTransform(task.createAd)}</td>
                <td className='container-buttons'>
                  <button onClick={() => deleteTask(task.id)}>
                    <DynamicIcon name="trash" color="red" size={20} />
                  </button>
                  <button onClick={() => updateTask(task.id)}>
                    <DynamicIcon name="pen" color="green" size={20} />
                  </button>
                  <button onClick={() => viewTask(task.id)}>
                    <DynamicIcon name="eye" color="white" size={20} />
                  </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </>
  )
}

export default Table;
