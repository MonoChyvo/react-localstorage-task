export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        <i
          style={
            task.done
              ? { color: 'green', fontSize: '2.1rem' }
              : { color: 'crimson', fontSize: '2.1rem' }
          }
        >
          {task.name}
        </i>
        <input
          type='checkbox'
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}
