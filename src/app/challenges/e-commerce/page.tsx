"use client";
import React from "react";

const stats = [
    {
        title: "Total Revenue",
        value: "$48,290",
        change: "+12.5%",
        icon: "$"
    },
    {
        title: "Total Orders",
        value: "1,284",
        change: "+8.2%",
        icon: "↗",
    },
    {
        title: "Total Customers",
        value: "8,549",
        change: "+14.6%",
        icon: "◉",
    }, {
        title: "Total Products",
        value: "248",
        change: "+4.3%",
        icon: "▦",
    }
];

const orders = [
    {
        id: "#ORD-4821",
        customer: "Olivia Martin",
        product: "Minimal Chair",
        amount: "$129.00",
        status: "Completed",
    },
    {
        id: "#ORD-4820",
        customer: "James Wilson",
        product: "Desk Lamp",
        amount: "$75.00",
        status: "Processing",
    },
    {
        id: "#ORD-4819",
        customer: "Sophia Brown",
        product: "Leather Bag",
        amount: "$185.00",
        status: "Completed",
    },
    {
        id: "#ORD-4818",
        customer: "Daniel Smith",
        product: "Ceramic Vase",
        amount: "$48.00",
        status: "Pending",
    },
    {
        id: "#ORD-4817",
        customer: "Emma Davis",
        product: "Minimal Chair",
        amount: "$129.00",
        status: "Completed",
    },
];

export default function EcommerceDashboard() {
    return (
        <main className="min-h-screen bg-[#f7f7f5] text-[#181818]"> {/* SIDEBAR */}
            <aside className=" fixed left-0 top-0 hidden h-screen w-64 border-r border-black/5 bg-white p-6 lg:block ">
                <div className="flex h-full flex-col"> {/* Logo */}
                    <div className="mb-12"><h1 className="text-xl font-bold tracking-tight"> Studio </h1> <p
                        className="mt-1 text-xs text-gray-400"> Commerce </p></div>
                    {/* Navigation */}
                    <nav className="space-y-2"><p
                        className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400"> Main
                        menu </p>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl bg-[#181818] px-4 py-3 text-sm font-medium text-white">
                            <span>▦</span> Dashboard </a>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-50 hover:text-black">
                            <span>□</span> Products </a>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-50 hover:text-black">
                            <span>↗</span> Orders </a>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-50 hover:text-black">
                            <span>◉</span> Customers </a>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 transition hover:bg-gray-50 hover:text-black">
                            <span>▤</span> Analytics </a></nav>
                    <div className="my-8 h-px bg-black/5"/>
                    <nav className="space-y-2"><p
                        className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400"> Settings </p>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 hover:text-black"> ⚙
                            Settings </a>
                        <a href="#"
                           className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 hover:bg-gray-50 hover:text-black"> ?
                            Help center </a>
                    </nav>
                    {/* User */}
                    <div className="mt-auto flex items-center gap-3 rounded-2xl bg-[#f7f7f5] p-3">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe9e5] text-sm font-bold"> TH
                        </div>
                        <div><p className="text-sm font-semibold"> Thoraya </p> <p
                            className="text-xs text-gray-400"> Admin </p></div>
                    </div>
                </div>
            </aside>
            {/* CONTENT */}
            <section className="lg:ml-64"> {/* TOP BAR */}
                <header className="border-b border-black/5 bg-white px-6 py-5 sm:px-8">
                    <div className="flex items-center justify-between">
                        <div><p className="text-xs font-medium text-gray-400"> Monday, August 31, 2026 </p> <h2
                            className="mt-1 text-2xl font-bold tracking-tight"> Good morning, Thoraya 👋 </h2></div>
                        <div className="flex items-center gap-3">
                            <button
                                className=" hidden h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white text-gray-500 sm:flex "> 🔔
                            </button>
                            <button
                                className=" flex h-11 items-center gap-2 rounded-xl bg-[#181818] px-4 text-sm font-semibold text-white ">
                                <span>+</span> Add Product
                            </button>
                        </div>
                    </div>
                </header>
                <div className="p-6 sm:p-8"> {/* STATS */}
                    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"> {stats.map((stat) => (
                        <div key={stat.title}
                             className=" rounded-[24px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ">
                            <div className="flex items-center justify-between"><p
                                className="text-sm text-gray-400"> {stat.title} </p>
                                <div
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f7f7f5] text-sm font-bold"> {stat.icon} </div>
                            </div>
                            <p className="mt-5 text-3xl font-bold tracking-tight"> {stat.value} </p> <p
                            className="mt-2 text-xs font-semibold text-emerald-600"> {stat.change} <span
                            className="ml-1 font-normal text-gray-400"> vs last month </span></p></div>))} </section>
                    {/* RECENT ORDERS */}
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
                                <tbody> {orders.map((order) => (
                                    <tr key={order.id} className="border-b border-black/5 last:border-0">
                                        <td className="px-6 py-5 text-sm font-semibold"> {order.id} </td>
                                        <td className="px-6 py-5 text-sm text-gray-600"> {order.customer} </td>
                                        <td className="px-6 py-5 text-sm text-gray-600"> {order.product} </td>
                                        <td className="px-6 py-5 text-sm font-semibold"> {order.amount} </td>
                                        <td className="px-6 py-5"><span
                                            className={` rounded-full px-3 py-1.5 text-xs font-semibold 
                                            ${order.status === "Completed" ? "bg-emerald-50 text-emerald-600" : order.status === "Processing" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"} `}> {order.status} </span>
                                        </td>
                                    </tr>))} </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}