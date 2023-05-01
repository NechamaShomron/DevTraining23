import { useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Next.js' },
  ]);
  const [taskToAdd, setTaskToAdd] = useState('');
  const onTaskAdd = () => {
    if (taskToAdd !== '') {
      setTasks([...tasks, { id: tasks.length + 1, title: taskToAdd }]);
      setTaskToAdd('');
    } else {
    // eslint-disable-next-line no-alert
      alert('Task name is empty');
    }
  };
  const onTaskRemove = (taskIdToDelete) => {
    setTasks((previousTasksData) => previousTasksData.filter((task) => task.id !== taskIdToDelete));
  };

  const onTaskChange = (e) => {
    setTaskToAdd(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onTaskAdd();
    }
  };
  return {
    tasks, taskToAdd, onTaskAdd, onTaskRemove, onTaskChange, handleKeyDown,
  };
}
