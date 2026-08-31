"use client";

import React, {useState} from "react";
import {Task} from "@/app/challenges/kanban-board/utils/data-tasks";

type AddTaskModalProps = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onAddTask: (task: Task) => void;
};

const AddTaskModal = ({setIsModalOpen, onAddTask}: AddTaskModalProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newTask: Task = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            status: formData.get("status") as Task["status"],
            priority: formData.get("priority") as Task["priority"],
            tag: formData.get("tag") as string,
            date: formData.get("date") as string,
            assignee: formData.get("assignee") as string,
            id:  crypto.randomUUID(),
            tagColor: "bg-purple-100 text-black",
            comments: 2,
            attachments: 1
        };

        console.log(newTask);

        onAddTask(newTask)
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
        >
            <div
                className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-zinc-100 px-6 py-5">
                    <div>
                        <h2 className="text-lg font-semibold text-zinc-900">
                            Create new task
                        </h2>
                        <p className="mt-1 text-sm text-zinc-500">
                            Add a new task to your project board.
                        </p>
                    </div>

                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-800 cursor-pointer"
                        onClick={() => setIsModalOpen(false)}>
                        ×
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-5 px-6 py-6" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            Task title
                        </label>
                        <input
                            name="title"
                            type="text"
                            placeholder="e.g. Design landing page"
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows={3}
                            placeholder="What needs to be done?"
                            className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                        />
                    </div>

                    {/* Status + Priority */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Status
                            </label>
                            <select
                                name="status"
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:border-zinc-400"
                                defaultValue="todo"
                            >
                                <option value="todo">Todo</option>
                                <option value="inprogress">In Progress</option>
                                <option value="review">Review</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Priority
                            </label>
                            <select
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:border-zinc-400"
                                defaultValue="medium"
                                name="priority"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    {/* Tag + Date */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Tag
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Design"
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                                name="tag"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Due date
                            </label>
                            <input
                                type="date"
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:border-zinc-400 focus:bg-white"
                                name="date"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Select Memember
                            </label>
                            <select
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:border-zinc-400"
                                defaultValue="medium"
                                name="assignee"
                            >
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                                <option value="TE">TE</option>
                            </select>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 border-t border-zinc-100 pt-5">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 cursor-pointer"
                        >
                            Create task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;