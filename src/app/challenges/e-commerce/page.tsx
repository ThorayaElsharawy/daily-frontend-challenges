import OrderTable from "@/app/challenges/e-commerce/components/order-table";
import EcommerceHeader from "@/app/challenges/e-commerce/components/header";

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
                <EcommerceHeader />
                <div className="p-6 sm:p-8"> {/* STATS */}
                    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.title}
                                 className=" rounded-[24px] border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ">
                                <div className="flex items-center justify-between"><p
                                    className="text-sm text-gray-400"> {stat.title} </p>
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f7f7f5] text-sm font-bold"> {stat.icon} </div>
                                </div>
                                <p className="mt-5 text-3xl font-bold tracking-tight"> {stat.value} </p> <p
                                className="mt-2 text-xs font-semibold text-emerald-600"> {stat.change} <span
                                className="ml-1 font-normal text-gray-400"> vs last month </span></p></div>))}
                    </section>
                    {/* RECENT ORDERS */}
                    <OrderTable/>
                </div>
            </section>
        </main>
    );
}