import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useTasks() {
  const {
    storedValue, setStoredValue,
  } = useLocalStorage('tasks', [
    { id: 1, title: 'Learn React', isComplete: true },
    { id: 2, title: 'Learn Next.js', isComplete: false },
  ]);
  const [tasks, setTasks] = useState(storedValue);
  const [taskToAdd, setTaskToAdd] = useState('');

  //   useEffect(() => {
  //     setStoredValue('tasks', [
  //       { id: 1, title: 'Learn React' },
  //       { id: 2, title: 'Learn Next.js' },
  //     ]);
  //   }, [tasks, storedValue]);

  const onTaskAdd = () => {
    if (taskToAdd !== '') {
      setTasks([...tasks, { id: Date.now(), title: taskToAdd, isComplete: false }]);
      setStoredValue([...tasks, { id: Date.now(), title: taskToAdd, isComplete: false }]);
      setTaskToAdd('');
    } else {
    // eslint-disable-next-line no-alert
      alert('Task name is empty');
    }
  };
  const onTaskRemove = (taskIDToDelete) => {
    setTasks((previousTasksData) => {
      const newTasks = previousTasksData.filter((task) => task.id !== taskIDToDelete);
      setStoredValue(newTasks);
      return newTasks;
    });
    // setStoredValue([...tasks, { id: tasks.length + 1, title: taskToAdd, isComplete: false }]);
  };

  const onTaskChange = (e) => {
    setTaskToAdd(e.target.value);
  };
  const toggleComplete = (taskID) => {
    setTasks((current) => {
      const taskIndex = tasks.findIndex((task) => task.id === taskID);
      if (taskIndex !== -1) {
        const newTasks = [...current];
        newTasks.splice(taskIndex, 1, {
          ...newTasks[taskIndex],
          isComplete: !newTasks[taskIndex].isComplete,
        });
        setStoredValue(newTasks);
        return newTasks;
      }
      return current;
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onTaskAdd();
    }
  };
  return {
    tasks, taskToAdd, onTaskAdd, onTaskRemove, onTaskChange, toggleComplete, handleKeyDown,
  };
}
