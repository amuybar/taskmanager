import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import Task from "@/components/Task/Task";
import { getXataClient } from '@/xata';
import { auth } from "@clerk/nextjs/server";
const xata = getXataClient();

export default async function Home() {
  const { userId } = auth();
  const user = userId ||undefined;
  const tasks = await xata.db.Tasks.filter({ user }).getMany();
  return (
    <main className={styles.main}>
      <Nav /> 
      <div>
        <Task initialTasks={tasks} />
      </div>
    </main>
  );
}
