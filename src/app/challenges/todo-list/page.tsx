"use client"

type Todo = {
    id: number,
    text: string,
    completed: boolean
}

import React, {useState} from 'react'

const TodoList = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddBtn = () => {
        setTodos(prevState => {
            return [
                ...prevState,
                {
                    id: Math.random(),
                    text: todoText,
                    completed: false
                }
            ]
        })

        setTodoText('')
    }

    const handleCheck = (id: number) => {
        setTodos( prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        )
    }

    const handleDelete = (id: number) => {
        setTodos(prevState =>
            prevState.filter(todo => todo.id !== id)
        )
    }


    return (
        <div className="w-full min-h-screen bg-linear-[135deg] from-[#153677]  to-[#4e085f] p-2">
            <div className="w-full max-w-[540px] bg-white mt-28 mx-auto mb-6 pt-10 px-8 pb-16 rounded-lg">
                <h2 className="flex items-center text-2xl font-bold text-[#002765] mb-5">To-Do List
                    <img className="w-8 ml-3" src="../imgs/icon.png" alt=""/></h2>
                <div className="flex items-center justify-between bg-[#edeef0] rounded-full pl-5 mb-6">
                    <input
                        onKeyDown={(e) => e.key === 'Enter' && handleAddBtn() }
                        onChange={(e) => setTodoText(e.target.value)}
                        value={todoText}
                        className="flex-1 outline-0 p-3" type="text" placeholder="Add you text"/>
                    <button onClick={handleAddBtn}
                            className="py-4 px-14 bg-[#ff5945] text-white rounded-full font-semibold cursor-pointer">
                        Add
                    </button>
                </div>
                <ul id="list-container">
                    {todos.map(item => {
                        return (
                            <li className="text-md px-7 py-3 flex items-center justify-between" key={item.id}>
                               <span className={`flex items-center gap-2 ${item.completed && 'line-through'}`}
                                     onClick={() => handleCheck(item.id)}>
                                    <img className="w-6 cursor-pointer"
                                         src={`../imgs/${item.completed ? 'checked' : 'unchecked'}.png`} alt=""/>
                                   {item.text}
                               </span>
                                <span className="cursor-pointer hover:bg-[#edeef0] rounded-xl p-1 px-3"
                                      onClick={() => handleDelete(item.id)}>&#10005;</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;