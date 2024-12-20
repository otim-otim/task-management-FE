"use client";

import { createTask, updateTask } from "@/services/tasks.service";
import {
  ITask,
  ITaskCreateResquest,
  ITaskUpdateRequest,
  TaskColor,
} from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Task({ task }: { task?: ITask }) {
  const [title, setTitle] = useState<string >(task?.title ?? '');
  const [selectedColor, setSelectedColor] = useState<TaskColor>(task?.color ?? "gray");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const COLOR_CLASSES: Record<TaskColor, string> = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  async function handleTaskCreateUpdate() {
    if (title) {
      if (task) {
        if(title === task.title && selectedColor === task.color){
            setError("No changes made")
            return
        }
        const taskUpdateRequest: ITaskUpdateRequest = {
          title,
          color: selectedColor,
        };
        await updateTask(taskUpdateRequest, task.id);
      } else {
        const taskCreateRequest: ITaskCreateResquest = {
          title,
          color: selectedColor,
        };
        await createTask(taskCreateRequest);
      }
      router.push("/");
    }else{
        setError("add a title to your task")
        return;
    }
  }
  const renderColorRadioGroup = () => {
    return (
      <div className="flex space-x-2">
        {(Object.keys(COLOR_CLASSES) as TaskColor[]).map((color) => (
          <label
            key={color}
            className={`
                  inline-block w-8 h-8 rounded-full cursor-pointer 
                  ${COLOR_CLASSES[color]}
                  ${
                    selectedColor === color
                      ? "ring-4 ring-offset-2 ring-blue-300"
                      : ""
                  }
                `}
          >
            <input
              type="radio"
              name="taskColor"
              value={color}
              checked={selectedColor === color}
              onChange={() => setSelectedColor(color)}
              className="hidden"
            />
          </label>
        ))}
      </div>
    );
  };
  const taskStyle = {
    width: "736px",
    height: "358px",
    top: "291px",
    left: "352px",
    gap: "48px",
    opacity: "0px",
  };

  return (
    <div className="max-w-md mx-auto py-6 " style={taskStyle}>
      <div className="w-full h-[81px] items-center mb-2 ">
      <label className="block text-sm font-medium text-blue-500">Title</label>
        &#8203;
        <input
  type="text"
  className="w-full bg-gray-500 rounded text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5"
  value={title}
  placeholder="finish project"
  onChange={(e) => setTitle(e.target.value)}
/>
      </div>
      <label className="block text-sm font-medium text-blue-500">Color</label>
      {renderColorRadioGroup()}
      <button
        onClick={handleTaskCreateUpdate}
        className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-white focus:relative bg-blue-500 w-full mt-4"
      >
        {task ? "save" : "Add Task"}
        {!task && (
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
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        )}
      </button>
      {error && (<p className="text-red-500 text-sm">{error}</p>)}
    </div>
  );
}
