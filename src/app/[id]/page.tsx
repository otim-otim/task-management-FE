'use client'

import { useSearchParams } from "next/navigation";
import Task from "../components/Task";

export default function Edit() {
    const searchParams = useSearchParams();
const taskDataParam = searchParams.get('taskData');
const taskData = taskDataParam ? JSON.parse(decodeURIComponent(taskDataParam)) : null;
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <Task task={taskData} />
        </main>
        </div>
    )
}