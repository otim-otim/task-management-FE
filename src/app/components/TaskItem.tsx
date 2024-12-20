"use client";

import { ITask, ITaskUpdateRequest } from "@/types";

export default function TaskItem({ task, handleTaskEdit, handleDeleteTask }: { task: ITask, handleTaskEdit: (eventData: { taskId: number, updateReq: ITaskUpdateRequest }) => void, handleDeleteTask: (taskId: number) => void }) {

    function printTasktitle() {
        if (task.title.length > 20) {
            return task.title.substring(0, 20) + '...'
        } else {
            return task.title
        }
    }

    function handleTaskCompletion(e) {
        const isCompleted = e.target.checked
        handleTaskEdit({
            taskId: task.id,
            updateReq: { completed: isCompleted }
        })
        console.log('Task completed', e.target.checked)
    }

    function onDeleteTask() {
        handleDeleteTask(task.id)
    }
  return (
    <label
      //   for="Option1"
      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
    >
      <div className="flex items-center">
        &#8203;
        <input
          type="checkbox"
          className="size-4 rounded border-gray-300"
          id="Option1"
          checked={task.completed}
          onChange={handleTaskCompletion}
        />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> {printTasktitle()} </strong>

        {/* <p className="mt-1 text-pretty text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      <div>
        <button
          onClick={onDeleteTask}>
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
    </label>
  );
}
