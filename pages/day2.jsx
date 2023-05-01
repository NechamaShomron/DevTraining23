import React, { useState } from 'react';
import Popup from '../components/Popup';
import useTasks from '../components/useTasks';
import styles from './day2.module.css';

function TaskList() {
  const {
    tasks, taskToAdd, onTaskAdd, onTaskRemove, onTaskChange, handleKeyDown,
  } = useTasks();
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const instructionsText = `
  1. Add an input field for adding new tasks.
  2. Implement a state variable to manage the value of the new task input field.
  3. Update the addTask function to create a new task based on the input field value.
  4. Add a removeTask function to remove a task by its ID.
  5. Implement a button for each task to remove it.
  6. Create a custom hook useTasks to manage the tasks state and related functions.
  7. Replace the useState and functions in the TaskList component with the custom hook useTasks.
  8. Add a toggleComplete function to mark a task as completed or not.
  9. Implement a checkbox for each task to toggle its completion status.
  10. Style completed tasks with a strike-through.
  11. Implement a useEffect hook to store the tasks in the local storage.
  12. Use the useEffect hook to load the tasks from local storage when the component mounts.`;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Task List</h1>
      <button className={styles.button} type="button" onClick={openPopup}>Challenges</button>
      {showPopup && (
        <Popup
          title="Day 2 Challenges"
          text={instructionsText}
          onClose={closePopup}
        />
      )}
      <ul className={styles.list}>
        {tasks.map((task) => (
          <div className={styles.listItem}>
            <li key={task.id}>{task.title}</li>
            <span className={styles.remove_task_button} onClick={() => onTaskRemove(task.id)} role="presentation">
              <i className="fa fa-trash" aria-hidden="true" />
            </span>
          </div>
        ))}
      </ul>
      <input placeholder="New Task Description" className={styles.add_task_input} value={taskToAdd} onChange={onTaskChange} onKeyDown={handleKeyDown} />
      <button type="button" className={styles.addButton} onClick={onTaskAdd}>Add Task</button>
    </div>
  );
}

export default TaskList;
