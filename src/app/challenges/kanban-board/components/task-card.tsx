import React, {useState} from "react";
import {Task} from "@/app/challenges/kanban-board/utils/data-tasks";

const TaskCard = ({task, updateTaskTitle}: {
    task: Task
    updateTaskTitle: (task: Task, title: string) => void
}) => {

    const [isEditingTitle, setEditingTitle] = useState(false);

    return (
        <article
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData('id', String(task.id));
            }}
            className={`group rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300
            cursor-pointer hover:border-zinc-400
            ${task.completed ? "opacity-70" : ""}
            `}>
            <div className="mb-3">
                <div className={`mb-4 font-semibold leading-5 flex justify-between ${task.completed && 'line-through'}`}>
                    {isEditingTitle ? (
                        <input
                            className="w-full"
                            autoFocus
                            onBlur={() => setEditingTitle(false)}
                            type="text"
                            onChange={(e) => updateTaskTitle(task, e.target.value)}
                            value={task.title}
                        />
                    ) : (
                        <div onClick={() => setEditingTitle(true)}>
                            {task.title}
                        </div>
                    )}
                </div>
                <p className="mb-4 text-sm leading-5 text-zinc-500">
                    {task.description}
                </p>
                <div className="flex items-center justify-between gap-2">
                    <p className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-medium ${task.completed ? 'bg-gray-400 text-white' : task.tagColor}`}>
                        {task.tag}
                    </p>
                    <p>
                        {task.priority === 'low' && <span>^</span>}
                        {task.priority === 'medium' && <span>=</span>}
                        {task.priority === 'high' && <span>⌄</span>}
                    </p>
                </div>
                <div className="my-4 h-px bg-zinc-100"/>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">📅 {task.date}</span>
                        <span className="flex items-center gap-1">💬 {task.comments > 0 && task.comments}</span>
                        <span className="flex items-center gap-1">📎 {task.attachments > 0 && task.attachments}</span>
                    </div>
                    {/* Avatar */}
                    <div
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-white">
                        {task.assignee}
                    </div>
                </div>

            </div>
        </article>

    )
}

export default TaskCard;