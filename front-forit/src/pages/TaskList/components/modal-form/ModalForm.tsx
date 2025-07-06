import { DynamicIcon } from "lucide-react/dynamic";
import { useEffect } from "react";
import { useForm, } from "react-hook-form";
import { CustomInput } from "../../../../components";
import type { CreateTask, Task } from "../../../../models";
import "./modal-form.css";

interface Props {
  open: boolean;
  onClose: () => void;
  create: (task: CreateTask) => Promise<void>;
  update: (id: number, task: CreateTask) => Promise<void>
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  mode: string;
  task: Task;
}



const ModalForm = ({ onClose, open, create, mode, task, update }: Props) => {

  const { handleSubmit, register, reset } = useForm<CreateTask>();

  useEffect(() => {

    if (mode === 'Update') {
      reset({
        completed: task?.completed ?? false,
        description: task?.description ?? '',
        title: task?.title ?? ''
      });

    }

    if (mode === 'Create') {
      reset({

      });

    }

  }, [open]);




  const onSubmit = (data: CreateTask) => {

    data.completed = Boolean(data.completed);

    if (mode === 'Update') {

      update(task.id, data).then(() => {

        onClose()
      })
    }

    if (mode === 'Create') {

      create(data).then(() => {
        onClose()
      });
    }

  }

  return (

    <section className={open ? "container-modal container-modal--open" : "container-modal"}  >

      <div className="modal-form">

        <header>
          <h3>{mode === 'Update' ? 'Editar Tarea' : 'Crear Tarea'}</h3>
        </header>


        <button className="modal-form__exit" onClick={onClose}>
          <DynamicIcon name="x" color="white" size={20} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="modal-form__form" >

          <CustomInput type="text" label="Titulo" placeholder="Ejemplo: Hacer la compra" refHtml="title" register={register("title", {
            required: 'El campo es requerido'
          })} />

          <div className="modal-form__container-textarea">
            <label htmlFor="">Descripción</label>
            <textarea id="description" {...register("description", {
              required: 'El campo es requerido'
            })}></textarea>
          </div>


          <select id="states" className="states" {...register("completed")}>
            <option value="true">Completado</option>
            <option value="false">Pendiente</option>
          </select>

          <button type="submit" className="modal-form__button">Save</button>
        </form>
      </div>

    </section>
  )
}

export default ModalForm;