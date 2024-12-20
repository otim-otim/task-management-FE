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
      className="cursor-pointer w-full rounded-tl-lg border-t bg-[#262626] border border-[#333333] shadow-[0_2px_8px_0_#0000000F] flex items-center justify-between p-3 sm:p-4 hover:bg-[#2C2C2C] transition-colors duration-300"
    >
      <div className="flex items-center w-full space-x-2 sm:space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleTaskCompletion}
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-blue-500 focus:ring-2 focus:ring-blue-300 checked:bg-blue-500"
        />
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs sm:text-sm text-white truncate">
              {printTasktitle()}
            </p>
            <div className="w-full max-w-[40px] ml-auto">
              <button
                onClick={onDeleteTask}
                className="transition-colors duration-300 p-1 w-full"
              >
                <div className="w-4 sm:w-5 ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
