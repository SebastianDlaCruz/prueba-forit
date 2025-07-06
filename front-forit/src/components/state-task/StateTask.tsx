import "./state-task.css";

interface Props {
  completed: boolean;
}
const StateTask = ({ completed }: Props) => {
  return (
    <>
      <span className={completed ? 'state-task completed' : 'state-task pending'}>{completed ? 'Completado' : 'Pendiente'}</span>
    </>
  )
}

export default StateTask;