"use client";

import { ITask, ITaskUpdateRequest } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent } from "react";

export default function TaskItem({
  task,
  handleTaskEdit,
  handleDeleteTask,
}: {
  task: ITask;
  handleTaskEdit: (eventData: {
    taskId: number;
    updateReq: ITaskUpdateRequest;
  }) => void;
  handleDeleteTask: (taskId: number) => void;
}) {

  const router = useRouter();
  
  function printTasktitle() {
    if (task.title.length > 100) {
      return task.title.substring(0, 100) + "...";
    } else {
      return task.title;
    }
  }

  function handleTaskCompletion(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const isCompleted = e.target.checked;
    handleTaskEdit({
      taskId: task.id,
      updateReq: { completed: isCompleted },
    });
    console.log("Task completed", e.target.checked);
  }

  function onDeleteTask(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    handleDeleteTask(task.id);
  }
  function handleTaskNavigation(e: MouseEvent<HTMLDivElement>) {
    // Only navigate if the click is not on the checkbox or delete button
    const target = e.target as HTMLElement;
    if (
      !target.closest('input[type="checkbox"]') &&
      !target.closest("button")
    ) {
      if (task.id) {
        router.push(
          `/${task.id}?taskData=${encodeURIComponent(JSON.stringify(task))}`
        );
      }
    }
  }
  return (
    <div
      onClick={handleTaskNavigation}
      className="cursor-pointer w-[736px] h-[72px] pt-4 space-x-3 rounded-tl-lg border-t bg-[#262626] border border-[#333333] shadow-[0_2px_8px_0_#0000000F] flex items-center justify-between px-4"
    >
      <label className="flex cursor-pointer items-center gap-4 p-4">
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="size-4 rounded-full border-2 border-blue-500 focus:ring-2 focus:ring-blue-300 checked:bg-blue-500"
            id="Option1"
            checked={task.completed}
            onChange={handleTaskCompletion}
          />
        </div>

        <div>
          <strong className="font-medium text-sm text-white-900">
            {printTasktitle()}
          </strong>
        </div>
      </label>

      <div>
        <button onClick={onDeleteTask}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </div>
  );
}
