import React from "react";
import {Order} from "@/app/challenges/e-commerce/utiles";

const OrderTable = async () => {
    const response = await fetch("http://localhost:3001/orders");
    if (!response.ok) throw new Error("Failed to fetch orders");
    const orders = await response.json();

    orders.sort(
        (a: Order , b: Order) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
    );


    return (
        <section className="mt-6 rounded-[28px] border border-black/5 bg-white">
            <div className="flex items-center justify-between border-b border-black/5 p-6">
                <div><p className="text-sm text-gray-400"> Sales </p> <h3
                    className="mt-1 text-xl font-bold"> Recent orders </h3></div>
                <button className="text-xs font-semibold underline underline-offset-4"> View all orders
                </button>
            </div>
            <div className="overflow-x-auto">
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
                    {orders.map((order: Order) => (
                        <tr key={order.id} className="border-b border-black/5 last:border-0 hover:bg-gray-100 cursor-pointer">
                            <td className="px-6 py-5 text-sm font-semibold"> {order.id} </td>
                            <td className="px-6 py-5 text-sm text-gray-600"> {order.customer} </td>
                            <td className="px-6 py-5 text-sm text-gray-600"> {order.product} </td>
                            <td className="px-6 py-5 text-sm font-semibold"> {order.amount} </td>
                            <td className="px-6 py-5"><span
                                className={` rounded-full px-3 py-1.5 text-xs font-semibold 
                                   ${order.status === "Completed" ? "bg-emerald-50 text-emerald-600" : order.status === "Processing" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"} `}> {order.status} </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default OrderTable;