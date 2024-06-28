'use server';

import { getXataClient } from "@/xata"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define the schema for task validation
const taskSchema = z.object({
  name: z.string().min(3, 'Task name should be at least 3 characters long')
})

type AddTaskResult = 
  | { success: true }
  | { success: false, errors: string[] };

export async function addTask(formData: FormData): Promise<AddTaskResult> {
  const xata = getXataClient()
  const name = formData.get('name') as string
  const { userId } = auth()

  // Validate the form data using Zod
  const result = taskSchema.safeParse({ name })

  if (!result.success) {
    // Handle validation errors
    const errors = result.error.errors
    return { success: false, errors: errors.map(error => error.message) }
  }

  try {
    await xata.db.Tasks.create({
      name,
      status: false,
      user: userId ?? undefined, // Ensure user is string or undefined
    })

    // Revalidate the current path to update the UI
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error adding task:', error)
    return { success: false, errors: ['Failed to add task'] }
  }
}