export type TaskColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'gray';

export interface ITask {
    id: number;
    title: string;
    color: TaskColor;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ITaskCreateResquest {
    title: string;
    color: TaskColor;
}

export interface ITaskUpdateRequest {
    
    title?: string;
    color?: TaskColor;
    completed?: boolean;
}