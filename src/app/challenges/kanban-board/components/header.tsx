import React, {useState} from "react";

const Header = ({setIsModalOpen}) => {

    return (
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
                    Manage your teams tasks and progress.
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
                    className="flex h-10 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className="text-lg leading-none">+</span>
                    Add task
                </button>
            </div>
        </header>
    )
}

export default Header;

