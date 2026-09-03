"use client"

import {useState} from "react";
import OrderFormModal from "@/app/challenges/e-commerce/components/order-form-modal";

const EcommerceHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <header className="border-b border-black/5 bg-white px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between">
                <div><p className="text-xs font-medium text-gray-400">Monday, August 31, 2026</p> <h2
                    className="mt-1 text-2xl font-bold tracking-tight">Good morning, Thoraya 👋</h2></div>
                <div className="flex items-center gap-3">
                    <button
                        className=" hidden h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white text-gray-500 sm:flex "> 🔔
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className=" flex h-11 items-center gap-2 rounded-xl bg-[#181818] px-4 text-sm font-semibold text-white cursor-pointer">
                        <span>+</span> Add Order
                    </button>

                    {isModalOpen && (
                        <OrderFormModal onClose={handleClose}/>
                    )}

                </div>
            </div>
        </header>
    )
}

export default EcommerceHeader