export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createAd: string;
}


export type CreateTask = Omit<Task, 'id' | 'createAd'>;