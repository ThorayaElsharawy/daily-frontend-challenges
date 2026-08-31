"use client";

import React, {useState} from "react";
import TaskCard from "@/app/challenges/kanban-board/components/task-card";
import Header from "@/app/challenges/kanban-board/components/header";
import {Task, Status} from "@/app/challenges/kanban-board/utils/data-tasks";
import AddTaskModal from "@/app/challenges/kanban-board/components/add-task-modal";


const KanbanBoard = () => {

    const initialTasks: Task[] = [
        {
            id: "1",
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
            id: "2",
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
            id: "3",
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
            id: "4",
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
            id: "5",
            title: 'Design landing page',
            description: "Create the new homepage layout.",
            tag: 'Design',
            tagColor: "bg-blue-100 text-blue-700",
            date: '20 Aug',
            comments: 3,
            attachments: 2,
            completed: true,
            assignee: 'TE',
            status: 'done',
            priority: "medium"
        },
        {
            id: "6",
            title: 'Create dashboard',
            description: "Build the main dashboard structure.",
            tag: 'UI',
            tagColor: "bg-blue-100 text-blue-700",
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
    const statuses: Status[] = ['todo', 'inprogress', 'review', 'done'];
    const [isModalOpen, setIsModalOpen] = useState(false)


    const columns = statuses.map(status => {
        const taskInColumn = tasks.filter(task => task.status === status)
        return {
            status,
            tasks: taskInColumn
        }
    })

    const updateTaskTitle = (task: Task, title: string) => {
        updateTask({...task, title});
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
        e.preventDefault();
        const id: string = e.dataTransfer.getData('id');
        const task = tasks.find(t => t.id === id);
        if (task) {
            updateTask({...task, status});
        }
    }

    const handleAddNewTask = (task: Task) => {
        setTasks(prev => [...prev, task]);
        setIsModalOpen(false);
    }

    const updateTask = (task: Task) => {
        setTasks(prevTask =>
            prevTask.map(t =>
                t.id === task.id ? task : { ...task, t }
            )
        )

        const newTask = tasks.map(t => {
            return task.id === t.id ? task : t
        })
        setTasks(newTask)
    }


    return (
        <main className="min-h-screen bg-[#f7f7f8] px-6 py-8 text-zinc-900">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <Header setIsModalOpen={setIsModalOpen}/>

                {/* Board */}
                <div className="grid grid-cols-4 gap-4 min-w-[1200px]">
                    {
                        columns.map((column) => (
                            <div
                                onDrop={(e) => handleDrop(e, column.status)}
                                onDragOver={(e) => e.preventDefault()}
                                className="rounded-2xl border border-zinc-200 bg-zinc-100/70 p-4" key={column.status}>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-4 w-4 rounded-full border-2 text-white
                                        flex items-center justify-center
                                        ${column.status === 'todo' && 'border-yellow-400'}
                                        ${column.status === 'inprogress' && 'border-blue-400'}
                                        ${column.status === 'review' && 'border-green-400 '}
                                        ${column.status === 'done' && 'bg-green-400 border-green-400'}
                                        
                                        `}>
                                            {column.status === 'done' && <>✓</>}
                                        </span>
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

            {isModalOpen && (
                <AddTaskModal setIsModalOpen={setIsModalOpen} onAddTask={handleAddNewTask}/>
            )}
        </main>
    );
};


export default KanbanBoard;