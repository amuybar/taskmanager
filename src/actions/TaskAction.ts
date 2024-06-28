'use server';

import { getXataClient } from "@/xata";
import { revalidatePath } from "next/cache";

// Type for the result of our actions
type ActionResult = 
  | { success: true }
  | { success: false, error: string };

export async function deleteTask(taskId: string): Promise<ActionResult> {
  const xata = getXataClient();

  try {
    await xata.db.Tasks.delete(taskId);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting task:', error);
    return { success: false, error: 'Failed to delete task' };
  }
}

export async function updateTaskStatus(taskId: string, newStatus: boolean): Promise<ActionResult> {
  const xata = getXataClient();

  try {
    await xata.db.Tasks.update(taskId, {
      status: newStatus
    });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error updating task status:', error);
    return { success: false, error: 'Failed to update task status' };
  }
}