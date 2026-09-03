import React from "react";
import {Order} from "@/app/challenges/e-commerce/utiles";
import OrderRow from "@/app/challenges/e-commerce/components/order-row";
import {OrdersTableClient} from "@/app/challenges/e-commerce/components/orders-table-client";

const OrderTable = async () => {
    const response = await fetch("http://localhost:3001/orders");
    if (!response.ok) throw new Error("Failed to fetch orders");
    const orders = await response.json();

    orders.sort(
        (a: Order, b: Order) =>
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
               <OrdersTableClient orders={orders} />
            </div>
        </section>
    )
}

export default OrderTable;