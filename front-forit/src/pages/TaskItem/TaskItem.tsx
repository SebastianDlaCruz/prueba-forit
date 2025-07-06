import { DynamicIcon } from 'lucide-react/dynamic';
import { useNavigate, useParams } from "react-router";
import { dateTransform } from "../../adapters";
import { StateTask } from "../../components";
import { UseTaskFetch } from "../../hook";
import { TasksService } from "../../services";
import LoaderTask from "./components/loader/LoaderTask";
import "./task-item.css";

const TaskItem = () => {

  const { id } = useParams();
  const { task } = UseTaskFetch({ httpMethod: new TasksService('task-item'), id: Number(id) });
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <main className='task-item'>

      {
        task ?
          <section className='task-item__section'>
            <header className='task-item__header'>
              <h1>{task.title}</h1>


              <div className="task-item__container-exit">
                <StateTask completed={task.completed} />
                <button className='container-loader__button' onClick={handleBack}>
                  <DynamicIcon className='container-loader__loader' name="arrow-left" color="white" size={20} />
                  <span>volver</span>
                </button>
              </div>

            </header>

            <section>
              <p>Descripción: {task.description}</p>

              <p>Fecha: {dateTransform(task.createAd)}</p>
            </section>

          </section>
          :
          <div className="container-loader">
            <LoaderTask />
            <button className='container-loader__button' onClick={handleBack}>
              <DynamicIcon className='container-loader__loader' name="arrow-left" color="white" size={20} />
              <span>volver</span>
            </button>
          </div>
      }

    </main>
  )
}

export default TaskItem;