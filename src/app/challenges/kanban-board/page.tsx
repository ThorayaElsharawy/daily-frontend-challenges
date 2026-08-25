"use client";

import React from "react";

type TaskCardProps = {
    title: string;
    description: string;
    tag: string;
    tagColor: string;
    date: string;
    comments: number;
    attachments: number;
    completed?: boolean;
    assignee: string
};


const KanbanBoard = () => {
    return (
        <main className="min-h-screen bg-[#f7f7f8] px-6 py-8 text-zinc-900">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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

                    <button
                        className="flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
                        <span className="text-lg leading-none">+</span>
                        Add task
                    </button>
                </header>

                {/* Board */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full border-2 border-zinc-400"/>
                                <h2 className="font-semibold">To Do</h2>
                                <span
                                    className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-zinc-500">4</span>
                            </div>
                            <button className="text-zinc-400 transition hover:text-zinc-800">
                                •••
                            </button>
                        </div>
                        <div className="space-y-3">
                            <TaskCard
                                title={"Design landing page"}
                                description={"Create the new homepage lavout."}
                                tag={"Design"} tagColor={"bg-purple-100 text-purple-700"}
                                date={"Aug 28"}
                                comments={4}
                                attachments={2}
                                assignee={"TE"}
                            />

                            <TaskCard
                                title={"Create dashboard"}
                                description={"Build the main dashboard structure."}
                                tag={"UI"}
                                tagColor={"bg-blue-100 text-blue-700"}
                                date={"Aug 30"}
                                comments={2}
                                attachments={1}
                                assignee={"TE"}
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full border-2 border-zinc-400"/>
                                <h2 className="font-semibold">To Do</h2>
                                <span
                                    className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-zinc-500">4</span>
                            </div>
                            <button className="text-zinc-400 transition hover:text-zinc-800">
                                •••
                            </button>
                        </div>
                        <div className="space-y-3">
                            <TaskCard
                                title={"Design landing page"}
                                description={"Create the new homepage lavout."}
                                tag={"Design"} tagColor={"bg-purple-100 text-purple-700"}
                                date={"Aug 28"}
                                comments={4}
                                attachments={2}
                                assignee={"TE"}
                            />

                            <TaskCard
                                title={"Create dashboard"}
                                description={"Build the main dashboard structure."}
                                tag={"UI"}
                                tagColor={"bg-blue-100 text-blue-700"}
                                date={"Aug 30"}
                                comments={2}
                                attachments={1}
                                assignee={"TE"}
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full border-2 border-zinc-400"/>
                                <h2 className="font-semibold">To Do</h2>
                                <span
                                    className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-zinc-500">4</span>
                            </div>
                            <button className="text-zinc-400 transition hover:text-zinc-800">
                                •••
                            </button>
                        </div>
                        <div className="space-y-3">
                            <TaskCard
                                title={"Design landing page"}
                                description={"Create the new homepage lavout."}
                                tag={"Design"} tagColor={"bg-purple-100 text-purple-700"}
                                date={"Aug 28"}
                                comments={4}
                                attachments={2}
                                assignee={"TE"}
                            />

                            <TaskCard
                                title={"Create dashboard"}
                                description={"Build the main dashboard structure."}
                                tag={"UI"}
                                tagColor={"bg-blue-100 text-blue-700"}
                                date={"Aug 30"}
                                comments={2}
                                attachments={1}
                                assignee={"TE"}
                            />
                        </div>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full border-2 border-zinc-400"/>
                                <h2 className="font-semibold">To Do</h2>
                                <span
                                    className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-zinc-500">4</span>
                            </div>
                            <button className="text-zinc-400 transition hover:text-zinc-800">
                                •••
                            </button>
                        </div>
                        <div className="space-y-3">
                            <TaskCard
                                title={"Design landing page"}
                                description={"Create the new homepage lavout."}
                                tag={"Design"} tagColor={"bg-purple-100 text-purple-700"}
                                date={"Aug 28"}
                                comments={4}
                                attachments={2}
                                assignee={"TE"}
                                completed={true}
                            />

                            <TaskCard
                                title={"Create dashboard"}
                                description={"Build the main dashboard structure."}
                                tag={"UI"}
                                tagColor={"bg-blue-100 text-blue-700"}
                                date={"Aug 30"}
                                comments={2}
                                attachments={1}
                                assignee={"TE"}
                                completed={true}
                            />
                        </div>
                    </div>
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
                      assignee
                  }: TaskCardProps) => {
    return (
        <article
            className={`group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300
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