
'use client';

import React, { useState } from 'react';
import TaskView from './TaskView';
import TaskForm from './TaskForm';
import styles from './Task.module.css';

interface Task {
  id: string;
  name: string;
  status: boolean;
}

interface TaskProps {
  initialTasks: Task[];
}

export default function Task({ initialTasks }: TaskProps) {
  const [activeTab, setActiveTab] = useState<'view' | 'add'>('view');

  const handleTabChange = (tab: 'view' | 'add') => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'view' ? styles.activeTab : ''}
          onClick={() => handleTabChange('view')}
        >
          View Tasks
        </button>
        <button
          className={activeTab === 'add' ? styles.activeTab : ''}
          onClick={() => handleTabChange('add')}
        >
          Add Task
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'view' ? <TaskView tasks={initialTasks} /> : <TaskForm />}
      </div>
    </div>
  );
}


