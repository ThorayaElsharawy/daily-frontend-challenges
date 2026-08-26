"use client";

import React from "react";

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
};


const KanbanBoard = () => {

    const tasks: TaskCardProps[] = [
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
            status: 'todo'
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
            status: 'todo'
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
            status: 'inprogress'
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
            status: 'inprogress'
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
            status: 'done'
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
            status: 'done'
        }
    ]

    const statuses = ['todo', 'inprogress', 'review', 'done'];

    const columns = statuses.map(status => {
        const taskInColumn = tasks.filter(task => task.status === status)
        return {
            status,
            tasks: taskInColumn
        }
    })

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
                                        <span className="h-3 w-3 rounded-full border-2 border-yellow-400"/>
                                        <h2 className="font-semibold">To Do</h2>
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
                                                id={task.id}
                                                title={task.title}
                                                description={task.description}
                                                tag={task.tag} tagColor={task.tagColor}
                                                date={task.date}
                                                comments={task.comments}
                                                attachments={task.attachments}
                                                assignee={task.assignee}
                                                status={task.status}
                                                completed={task.completed}
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


const TaskCard = ({
                      title,
                      description,
                      tag,
                      tagColor,
                      date,
                      comments,
                      attachments,
                      completed,
                      assignee,
                      status
                  }: TaskCardProps) => {
    return (
        <article
            className={`group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300
            cursor-pointer hover:border-zinc-400
            ${completed ? "opacity-70" : ""}
            `}>
            <div className="mb-3">
                <h3 className={`mb-4 font-semibold leading-5 ${completed && 'line-through'}`}>{title}</h3>
                <p className="mb-4 text-sm leading-5 text-zinc-500">{description}</p>
                <p className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-medium ${completed ? 'bg-gray-400 text-white' : tagColor}`}>{tag}</p>
                <div className="my-4 h-px bg-zinc-100"/>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">📅 {date}</span>
                        <span className="flex items-center gap-1">💬 {comments > 0 && comments}</span>
                        <span className="flex items-center gap-1">📎 {attachments > 0 && attachments}</span>
                    </div>
                    {/* Avatar */}
                    <div
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white">
                        {assignee}
                    </div>
                </div>

            </div>

        </article>

    )

}