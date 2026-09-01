"use client"

import React, {useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";

const orderSchema = z.object({
    customer: z.string().min(2, "Customer name is required"),
    email: z.email("Enter a valid email address"),
    product: z.string().min(1, "Product is required"),
    quantity: z.coerce.number().int().min(1, "Quantity must be at least 1"),
    amount: z.coerce.number().min(0.01, "Total must be greater than 0"),
    status: z.enum(["pending", "processing", "completed", "cancelled"])
})

type OrderFormValues = z.infer<typeof orderSchema>

const AddNewOrder = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<OrderFormValues>({
        resolver: zodResolver(orderSchema),
        defaultValues: {status: 'pending'}
    })

    const onSubmit = async (data: OrderFormValues) => {
        try {
            const response = await fetch("http://localhost:3001/orders",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: crypto.randomUUID(),
                        createdAt: new Date().toISOString(),
                        ...data
                    }),
                }
            )

            if (!response.ok) return;

            reset()
            setIsModalOpen(false)
            router.refresh();

        } catch (error) {
            console.log(error)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        reset()
    }

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className=" flex h-11 items-center gap-2 rounded-xl bg-[#181818] px-4 text-sm font-semibold text-white cursor-pointer">
                <span>+</span> Add Order
            </button>
            {
                isModalOpen && (
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
                                        Create new order
                                    </h2>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        Add a new task to your project board.
                                    </p>
                                </div>

                                <button
                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-800 cursor-pointer"
                                    onClick={closeModal}>
                                    ×
                                </button>
                            </div>

                            {/* Form */}
                            <form className="space-y-5 px-6 py-6" onSubmit={handleSubmit(onSubmit)}>
                                {/* Customer Name */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="customer"
                                        className="text-sm font-medium text-zinc-700"
                                    >
                                        Customer Name
                                    </label>

                                    <input
                                        id="customer"
                                        type="text"
                                        placeholder="Enter customer name"
                                        className={`
                                        ${errors.customer ? 'border-red-500' : 'border-zinc-200'}
                                        w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900`}
                                        {...register("customer")}
                                    />

                                    {errors.customer && (
                                        <p className="text-xs text-red-500">{errors.customer.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-zinc-700"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        {...register("email")}
                                        id="email"
                                        type="email"
                                        placeholder="customer@example.com"
                                        className={`
                                        ${errors.email ? 'border-red-500' : 'border-zinc-200'} 
                                        w-full rounded-xl border  px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900`}
                                    />
                                    {errors.email && (
                                        <p className="text-xs text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Product & Quantity */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="product"
                                            className="text-sm font-medium text-zinc-700"
                                        >
                                            Product
                                        </label>

                                        <input
                                            {...register("product")}
                                            id="product"
                                            type="text"
                                            placeholder="Product name"
                                            className={` 
                                            ${errors.product ? 'border-red-500' : 'border-zinc-200'}
                                            w-full rounded-xl border  px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900`}
                                        />
                                        {errors.product && (
                                            <p className="text-xs text-red-500">{errors.product.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="quantity"
                                            className="text-sm font-medium text-zinc-700"
                                        >
                                            Quantity
                                        </label>

                                        <input
                                            {...register("quantity")}
                                            id="quantity"
                                            type="number"
                                            min="1"
                                            placeholder="0"
                                            className={`
                                            ${errors.quantity ? 'border-red-500' : 'border-zinc-200'}
                                            w-full rounded-xl border  px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900`}
                                        />
                                        {errors.quantity && (
                                            <p className="text-xs text-red-500">{errors.quantity.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Total & Status */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="total"
                                            className="text-sm font-medium text-zinc-700"
                                        >
                                            Total Amount
                                        </label>

                                        <input
                                            {...register("amount")}
                                            id="total"
                                            type="number"
                                            placeholder="$0.00"
                                            className={`
                                            ${errors.amount ? 'border-red-500' : 'border-zinc-200'}
                                            w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900`}
                                        />
                                        {errors.amount && (
                                            <p className="text-xs text-red-500">{errors.total.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="status"
                                            className="text-sm font-medium text-zinc-700"
                                        >
                                            Status
                                        </label>

                                        <select
                                            {...register("status")}
                                            id="status"
                                            className={`w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900`}>
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-3 border-t border-zinc-100 pt-5">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="cursor-pointer rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
                                    >
                                        {isSubmitting ? 'Creating....': 'Create Order'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default AddNewOrder