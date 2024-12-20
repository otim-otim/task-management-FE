"use client";

import { useSearchParams } from "next/navigation";
import Task from "../components/Task";

export default function Edit() {
  const searchParams = useSearchParams();
  const taskDataParam = searchParams.get("taskData");
  const taskData = taskDataParam
    ? JSON.parse(decodeURIComponent(taskDataParam))
    : null;
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 sm:px-8 py-4 pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex flex-col gap-4 sm:gap-8 items-center sm:items-start">
        <Task task={taskData} />
      </main>
    </div>
  );
}
