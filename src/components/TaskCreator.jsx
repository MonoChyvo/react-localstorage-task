import { useState } from 'react'

export const TaskCreator = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(newTaskName)
    setNewTaskName('')
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='my-2 row'
      >
        <div className='col-9'>
          <input
            type='text'
            placeholder='Ingresa nueva tarea'
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            autoFocus
            className='form-control'
          />
        </div>
        <div className='col-3'>
          <button className='btn btn-primary btn-sm'>Guardar tarea</button>
        </div>
      </form>
    </div>
  )
}
