import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UseTaskFetch } from '../../hook';
import { TasksService } from '../../services';
import ModalForm from './components/modal-form/ModalForm';
import Nav from './components/nav/Nav';
import Table from './components/table/Table';
import { useDialog } from './hook/useDialog/useDialog';
import './TaskList.css';

const Home = () => {

  const navigate = useNavigate();


  const [mode, setMode] = useState('Create');
  const { tasks, setTasks, create, deleteTask, getFindOne, task, update } = UseTaskFetch({ httpMethod: new TasksService('task-item') });
  const { handleOpenDialog, open, handleCloseDialog } = useDialog();




  const handleOpenCreate = () => {
    setMode('Create');
    handleOpenDialog();

  }

  const openModalUpdate = (id: number) => {
    setMode('Update');
    getFindOne(id).then(() => {
      handleOpenDialog();
    });
  }



  const handleView = (id: number) => {
    navigate(`/task-item/${id}`)
  }


  return (
    <>
      <header className="home-header">
        <h1>Lista de tareas</h1>
      </header>

      <main className='padding-inline'>
        <Nav onOpenModal={handleOpenCreate} />
        <Table tasks={tasks} deleteTask={deleteTask} viewTask={handleView} updateTask={openModalUpdate} />
      </main>

      <ModalForm open={open} onClose={handleCloseDialog} update={update}
        create={create} setTasks={setTasks} mode={mode} task={task} />




    </>
  )
}

export default Home;