import AddNewOrder from "@/app/challenges/e-commerce/components/add-new-order";

const EcommerceHeader = () => {
    return (
        <header className="border-b border-black/5 bg-white px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between">
                <div><p className="text-xs font-medium text-gray-400">Monday, August 31, 2026</p> <h2
                    className="mt-1 text-2xl font-bold tracking-tight">Good morning, Thoraya 👋</h2></div>
                <div className="flex items-center gap-3">
                    <button
                        className=" hidden h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white text-gray-500 sm:flex "> 🔔
                    </button>
                    <AddNewOrder/>
                </div>
            </div>
        </header>
    )
}

export default EcommerceHeader