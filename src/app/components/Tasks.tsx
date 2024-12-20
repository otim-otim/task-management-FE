"use client";

import { deleteTask, getTasks, updateTask } from "@/services/tasks.service";
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
import { ITask, ITaskUpdateRequest } from "@/types";

export default function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const { data } = await getTasks();
        setLoading(false);
        const { tasks } = data;

        setTasks(tasks);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    populateTasks();
  }, [loading, tasks]);

  const completedTasks = tasks.filter((task) => task.completed).length;
  function populateTasks() {
    if (tasks.length === 0)
      return (
        <>
          <div className="flex flex-col items-center w-full min-h-screen text-center text-gray-500 pt-20">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#bdbcbc"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clipboard-list"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4">
              You don&apos;t have any tasks yet
            </h1>
            <p className="text-gray-500">
              Create tasks and organize your todo items
            </p>
          </div>
        </>
      );
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Loading Tasks</h1>
            <div className="w-8 sm:w-10">
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
                className="lucide lucide-loader animate-spin"
              >
                <path d="M12 2v4" />
                <path d="m16.2 7.8 2.9-2.9" />
                <path d="M18 12h4" />
                <path d="m16.2 16.2 2.9 2.9" />
                <path d="M12 18v4" />
                <path d="m4.9 19.1 2.9-2.9" />
                <path d="M2 12h4" />
                <path d="m4.9 4.9 2.9 2.9" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return tasks.map((task) => {
      return (
        <TaskItem
          task={task}
          key={task.id}
          handleTaskEdit={onTaskEdit}
          handleDeleteTask={onDeleteTask}
        />
      );
    });
  }

  async function onTaskEdit(eventData: {
    taskId: number;
    updateReq: ITaskUpdateRequest;
  }) {
    try {
      const { taskId, updateReq } = eventData;
      const { data } = await updateTask(updateReq, taskId);
      const { task } = data;
      const updatedTasks = tasks.map((taskItem) => {
        if (taskItem.id === task.id) {
          return { ...taskItem, ...task };
        }
        return taskItem;
      });
      setTasks(updatedTasks);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  }

  async function onDeleteTask(taskId: number) {
    try {
      await deleteTask(taskId);
      const updatedTasks = tasks.filter((taskItem) => taskItem.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  }

  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-[736px] sm:mx-auto space-y-2 sm:space-y-3 ">
      <div className="flex items-center justify-between mb-2 sm:mb-3 w-full">
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-bold">Tasks</span>
          <span className="whitespace-nowrap rounded-full bg-[#262626] px-2 py-0.5 text-xs sm:text-sm text-white">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-bold">Completed</span>
          <span className="whitespace-nowrap rounded-full bg-[#262626] px-2 py-0.5 text-xs sm:text-sm text-white">
            {completedTasks} of {tasks.length}
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-4 sm:py-6">
          <svg
            className="animate-spin h-5 w-5 sm:h-6 sm:w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        populateTasks()
      )}

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-3 py-2 rounded-md text-xs sm:text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
