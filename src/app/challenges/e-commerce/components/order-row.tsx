"use client"

import React from "react";
import {Order} from "@/app/challenges/e-commerce/utiles";
import {useRouter} from "next/navigation";

type OrderRowProps = {
    order: Order;
    handleEditRow: (id: string) => void;
    handleDeleteRow: (id: string) => void;
}

const OrderRow = ({order, handleEditRow, handleDeleteRow}: OrderRowProps) => {
    const router = useRouter();

    const handleDelete = (e: React.MouseEvent<HTMLTableCellElement> , id: string) => {
        e.stopPropagation()
        handleDeleteRow(id);
        router.refresh()
    }

    return (
        <>
            <tr
                onClick={() => handleEditRow(order.id)}
                className="border-b border-black/5 last:border-0 hover:bg-gray-100 cursor-pointer">
                <td className="px-6 py-5 text-sm font-semibold"> {order.id} </td>
                <td className="px-6 py-5 text-sm text-gray-600"> {order.customer} </td>
                <td className="px-6 py-5 text-sm text-gray-600"> {order.product} </td>
                <td className="px-6 py-5 text-sm font-semibold"> {order.amount} </td>
                <td className="px-6 py-5">
                    <span
                        className={` rounded-full px-3 py-1.5 text-xs font-semibold 
                         ${
                            order.status === "completed" ? "bg-emerald-50 text-emerald-600" : 
                                order.status === "processing" ? "bg-blue-50 text-blue-600" :
                                    order.status === "cancelled" ? 'bg-red-50 text-red-600' :
                                            "bg-amber-50 text-amber-600" } `}> {order.status} </span>
                </td>
                <td
                    onClick={(e) => handleDelete(e, order.id)}
                    className={`px-6 py-5 text-sm text-gray-600`}>
                    x
                </td>
            </tr>
        </>
    )
}

export default OrderRow;