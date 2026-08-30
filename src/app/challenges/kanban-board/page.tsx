"use client";

import React, {useState} from "react";
import TaskCard from "@/app/challenges/kanban-board/components/task-card";

type TaskCardProps = {
    id: number;
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


const KanbanBoard = () => {

    const initialTasks: TaskCardProps[] = [
        {
            id: 1,
            title: 'Design landing page',
            description: "Create the new homepage layout.",
            tag: 'Design',
            tagColor: "bg-purple-100 text-purple-700",
            date: '20 Aug',
            comments: 3,
            attachments: 2,
            completed: false,
            assignee: 'TE',
            status: 'todo',
            priority: "low"
        },
        {
            id: 2,
            title: 'Create dashboard',
            description: "Build the main dashboard structure.",
            tag: 'UI',
            tagColor: "bg-blue-100 text-blue-700",
            date: '30 Aug',
            comments: 2,
            attachments: 1,
            completed: false,
            assignee: 'TE',
            status: 'todo',
            priority: "medium"
        },
        {
            id: 3,
            title: 'Design landing page',
            description: "Create the new homepage layout.",
            tag: 'Design',
            tagColor: "bg-purple-100 text-purple-700",
            date: '20 Aug',
            comments: 3,
            attachments: 2,
            completed: false,
            assignee: 'TE',
            status: 'inprogress',
            priority: "high"
        },
        {
            id: 4,
            title: 'Create dashboard',
            description: "Build the main dashboard structure.",
            tag: 'UI',
            tagColor: "bg-blue-100 text-blue-700",
            date: '30 Aug',
            comments: 2,
            attachments: 1,
            completed: false,
            assignee: 'TE',
            status: 'inprogress',
            priority: "low"
        },
        {
            id: 5,
            title: 'Design landing page',
            description: "Create the new homepage layout.",
            tag: 'Design',
            tagColor: "green",
            date: '20 Aug',
            comments: 3,
            attachments: 2,
            completed: true,
            assignee: 'TE',
            status: 'done',
            priority: "medium"
        },
        {
            id: 6,
            title: 'Create dashboard',
            description: "Build the main dashboard structure.",
            tag: 'UI',
            tagColor: "green",
            date: '30 Aug',
            comments: 2,
            attachments: 1,
            completed: true,
            assignee: 'TE',
            status: 'done',
            priority: "high"
        }
    ]

    const [tasks, setTasks] = useState(initialTasks)

    const statuses = ['todo', 'inprogress', 'review', 'done'];
    const priorities = ['low', 'medium', 'high'];

    const columns = statuses.map(status => {
        const taskInColumn = tasks.filter(task => task.status === status)
        return {
            status,
            tasks: taskInColumn
        }
    })

    const updateTaskTitle = (task: TaskCardProps, title: string) => {
        const updatedTask = tasks.map(t => {
           return  task.id === t.id ? { ...t, title } : t
        })

        setTasks(updatedTask)
    }

    return (
        <main className="min-h-screen bg-[#f7f7f8] px-6 py-8 text-zinc-900">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    {/* Title */}
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-sm text-zinc-400">
                            <span>Workspace</span>
                            <span>/</span>
                            <span>Projects</span>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight">
                            Project Board
                        </h1>

                        <p className="mt-1 text-sm text-zinc-500">
                            Manage your team's tasks and progress.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        {/* Search */}
                        <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                ⌕
            </span>

                            <input
                                type="text"
                                placeholder="Search tasks..."
                                className="h-10 w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-14 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 sm:w-56"
                            />

                            <span
                                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
                ⌘ K
            </span>
                        </div>

                        {/* Add Task */}
                        <button
                            className="flex h-10 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800"
                        >
                            <span className="text-lg leading-none">+</span>
                            Add task
                        </button>
                    </div>
                </header>

                {/* Board */}
                <div className="grid grid-cols-4 gap-4 min-w-[1200px]">
                    {
                        columns.map((column) => (
                            <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4" key={column.status}>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-3 w-3 rounded-full border-2 
                                        
                                        ${column.status === 'todo' && 'border-yellow-400'}
                                        ${column.status === 'inprogress' && 'border-green-400'}
                                        ${column.status === 'review' && 'border-yellow-400'}
                                        ${column.status === 'done' && 'border-yellow-400'}
                                        
                                        `}/>
                                        <h2 className="font-semibold uppercase">{column.status}</h2>
                                        <span
                                            className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-zinc-500">4</span>
                                    </div>
                                    <button className="text-zinc-400 transition hover:text-zinc-800">
                                        •••
                                    </button>
                                </div>
                                <div className="space-y-3">
                                    {column.tasks.length > 0 ?
                                        column.tasks.map(task => (
                                            <TaskCard
                                                key={task.id}
                                                task={task}
                                                updateTaskTitle={updateTaskTitle}
                                            />
                                        ))
                                        : (
                                            <div className="p-2 py-6 text-center space-y-4 mt-12">
                                                <p className="bg-gray-200 w-fit mx-auto p-2 px-3 rounded-3xl">
                                                    <span className="text-2xl"> 📑</span>
                                                </p>
                                                <p className="text-sm">No tasks currently. Board is empty</p>
                                                <button
                                                    className="bg-zinc-800 text-white p-2 px-4 rounded-3xl cursor-pointer">Create
                                                    task
                                                </button>
                                            </div>
                                        )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};


export default KanbanBoard;