export type Task = {
    id: string;
    title: string;
    description: string;
    tag: string;
    tagColor: string;
    date: string;
    comments: number;
    attachments: number;
    completed?: boolean;
    assignee: string;
    status: 'todo' | 'inprogress' | 'review' | 'done';
    priority: 'low' | 'medium' | 'high';
};

export type Status = 'todo' | 'inprogress' | 'review' | 'done'