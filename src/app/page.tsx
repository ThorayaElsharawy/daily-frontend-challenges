
import Link from "next/link";

const challenges = [
    {
        number: "01",
        title: "Weather",
        icon: "☁️",
        description:
            "Search for a city and explore its current weather conditions with a clean and simple interface.",
        tags: ["API", "JavaScript"],
        href: "/challenges/weather",
        color: "from-[#e9e7ff] to-[#f4f3ff]",
    },
    {
        number: "02",
        title: "Todo List",
        icon: "✓",
        description:
            "Create, complete, edit, and organize everyday tasks while keeping everything simple and intuitive.",
        tags: ["DOM", "LocalStorage"],
        href: "/challenges/todo-list",
        color: "from-[#fff1c9] to-[#fff8e8]",
    },
    {
        number: "03",
        title: "Kanban board",
        icon: "📋",
        description:
            "Stay focused with a productivity timer designed around short, intentional working sessions.",
        tags: ["Timer", "JavaScript"],
        href: "/challenges/kanban-board",
        color: "from-[#ffe8e2] to-[#fff2ef]",
    },

];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f9fafc] px-6 py-10 md:px-12 lg:px-20">
            <section className="mx-auto max-w-7xl">

                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                            Explore
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                            My challenges
                        </h2>
                    </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {challenges.map((challenge) => (
                        <Link
                            key={challenge.number}
                            href={challenge.href}
                            className="group"
                        >
                            <article
                                className={`
                                    relative
                                    min-h-[330px]
                                    overflow-hidden
                                    rounded-[40px]
                                    bg-gradient-to-br
                                    ${challenge.color}
                                    p-8
                                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)]
                                    md:p-10
                                `}
                            >

                                {/* Decorative circle */}
                                <div
                                    className="
                                        absolute
                                        -right-16
                                        -top-16
                                        h-48
                                        w-48
                                        rounded-full
                                        bg-white/30
                                        transition-transform
                                        duration-700
                                        group-hover:scale-150
                                    "
                                />

                                {/* Another decorative shape */}
                                <div
                                    className="
                                        absolute
                                        -bottom-20
                                        -left-20
                                        h-52
                                        w-52
                                        rounded-full
                                        bg-white/20
                                        blur-2xl
                                    "
                                />

                                {/* TOP */}
                                <div className="relative flex items-center justify-between">
                                    <div
                                        className="
                                        relative

                                        flex
                                        h-20
                                        w-20
                                        items-center
                                        justify-center
                                        rounded-[26px]
                                        bg-white/70
                                        text-4xl
                                        shadow-sm
                                        transition-transform
                                        duration-500
                                        group-hover:scale-110
                                        group-hover:-rotate-3
                                    "
                                    >
                                        {challenge.icon}
                                    </div>
                                    <span
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/70
                                            text-lg
                                            text-gray-700
                                            shadow-sm
                                            transition-all
                                            duration-300
                                            group-hover:rotate-45
                                            group-hover:bg-white
                                        "
                                    >
                                        ↗
                                    </span>
                                </div>

                                {/* ICON */}


                                {/* CONTENT */}
                                <div className="relative mt-8">
                                    <h3 className="text-4xl font-bold uppercase tracking-[-0.03em] text-gray-900">
                                        {challenge.title}
                                    </h3>

                                    <p className="mt-4 max-w-lg text-base leading-7 text-gray-600">
                                        {challenge.description}
                                    </p>
                                </div>

                                {/* TAGS */}
                                <div className="relative mt-8 flex flex-wrap gap-2">
                                    {challenge.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                bg-white/60
                                                px-4
                                                py-2
                                                text-xs
                                                font-semibold
                                                text-gray-600
                                                backdrop-blur-sm
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Link>
                    ))}

                </div>
            </section>

            {/* FOOTER */}
            <footer
                className="mx-auto mt-24 flex max-w-7xl items-center justify-between border-t border-gray-200 py-8 text-sm text-gray-400">
                <p>Daily Frontend Challenges</p>

                <p>
                    Keep building. Keep improving.
                </p>
            </footer>

        </main>
    );
}