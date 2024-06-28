'use client';

import { useState } from 'react';
import styles from './View.module.css';
import { deleteTask, updateTaskStatus } from '@/actions/TaskAction';
 
interface Task {
  id: string;
  name: string;
  status: boolean;
}

interface TaskViewProps {
  tasks: Task[];
}

export default function TaskView({ tasks: initialTasks }: TaskViewProps) {
  const [tasks, setTasks] = useState(initialTasks);

  // Function to delete task
  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to toggle task status
  const handleToggleStatus = async (taskId: string, currentStatus: boolean) => {
    try {
      await updateTaskStatus(taskId, !currentStatus);
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: !currentStatus } : task
      ));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  // Render tasks if available, otherwise display a message
  if (!tasks.length) {
    return <p className={styles.noTasks}>No tasks found</p>;
  }

  return (
    <div className={styles.taskContainer}>
      {tasks.map(task => (
        <div key={task.id} className={`${styles.taskItem} ${task.status ? styles.completed : ''}`}>
          <div className={styles.taskContent}>
            <p className={styles.taskName}>{task.name}</p>
            <p className={styles.taskStatus}>Status: {task.status ? 'Completed' : 'Pending'}</p>
          </div>
          <div className={styles.taskActions}>
            <button 
              onClick={() => handleToggleStatus(task.id, task.status)}
              className={`${styles.actionButton} ${styles.toggleButton}`}
            >
              {task.status ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button 
              onClick={() => handleDeleteTask(task.id)}
              className={`${styles.actionButton} ${styles.deleteButton}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}