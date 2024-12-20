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
    populateTasks()
  }, [loading, tasks]);

  const completedTasks = tasks.filter(task => task.completed).length;
  function populateTasks() {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">
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
              className="lucide lucide-loader"
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
          </h1>
        </div>
      );
    }
    return tasks.map((task) => {
      return <TaskItem task={task} key={task.id} handleTaskEdit={onTaskEdit} handleDeleteTask={onDeleteTask} />;
    });
  }

  async function onTaskEdit(eventData : {taskId: number, updateReq : ITaskUpdateRequest}) {
    try {
        const { taskId, updateReq } = eventData
        const { data }  = await updateTask(updateReq, taskId);
        const { task }  = data
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
        
        await deleteTask( taskId);
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

//   function handleTaskEdit(0)

  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <div>
          <span className="text-sm font-bold">Tasks</span>
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
            {tasks.length}
          </span>
        </div>
        <div className="ml-auto mr-0">
          <span className="text-sm font-bold">Completed</span>
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
          {completedTasks} of {tasks.length}
          </span>
        </div>
      </div>

      {populateTasks()}
    </div>
  );
}
