'use client';

import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import { addTask } from '@/actions/AddTask';

export default function TaskForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    
    try {
      const result = await addTask(formData);
      if (result.success) {
        formRef.current?.reset();
      } else {
        setError(result.errors.join(', '));
      }
    } catch (error) {
      console.error('Error adding task:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        aria-label="Task name"
        pattern="[A-Za-z ]{3,}"
        title="Task name should be at least 3 characters long and contain only letters and spaces"
        required
        placeholder="Add a new task"
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>
        Add
      </button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
}