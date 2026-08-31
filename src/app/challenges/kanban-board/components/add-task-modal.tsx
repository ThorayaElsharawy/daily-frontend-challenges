"use client";

import React from "react";

type AddTaskModalProps = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTaskModal = ({setIsModalOpen}: AddTaskModalProps) => {
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
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-800"
                        onClick={() => setIsModalOpen(false)}>
                        ×
                    </button>
                </div>

                {/* Form */}
                <div className="space-y-5 px-6 py-6">
                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            Task title
                        </label>
                        <input
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
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-zinc-700">
                                Due date
                            </label>
                            <input
                                type="date"
                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm outline-none focus:border-zinc-400 focus:bg-white"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 border-t border-zinc-100 pt-5">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
                        >
                            Cancel
                        </button>

                        <button
                            className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
                        >
                            Create task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;