"use client"

import {Order} from "@/app/challenges/e-commerce/utiles";
import OrderRow from "@/app/challenges/e-commerce/components/order-row";
import React, {useState} from "react";
import OrderFormModal from "@/app/challenges/e-commerce/components/order-form-modal";

const OrdersTableClient = ({orders}: { orders: Order[] }) => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>();

    const handleEditRow = (id: string) => {
        const order = orders.find((order) => order.id === id);
        setSelectedOrder(order);
    }

    const closeModal = () => {
        setSelectedOrder(null)
    }

    const handleDeleteRow = async (id: string) => {
        const response = fetch(`http://localhost:3001/orders/${id}`, {
            method: "DELETE"
        })


    }

    return (
        <>

            <table className="w-full min-w-[700px]">
                <thead>
                <tr className="border-b border-black/5 text-left text-xs text-gray-400">
                    <th className="px-6 py-4 font-medium"> Order</th>
                    <th className="px-6 py-4 font-medium"> Customer</th>
                    <th className="px-6 py-4 font-medium"> Product</th>
                    <th className="px-6 py-4 font-medium"> Amount</th>
                    <th className="px-6 py-4 font-medium"> Status</th>
                </tr>
                </thead>
                <tbody>
                {orders?.map((order: Order) => (
                    <OrderRow order={order} key={order.id} handleEditRow={handleEditRow} handleDeleteRow={handleDeleteRow}/>
                ))}
                </tbody>
            </table>
            {
                selectedOrder && (
                    <OrderFormModal onClose={closeModal} selectedOrder={selectedOrder} />
                )
            }
        </>
    )
}

export {OrdersTableClient}