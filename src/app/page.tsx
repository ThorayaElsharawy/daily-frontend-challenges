import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div>
                <Link href='/challenges/weather'>Weather</Link>
            </div>
            <div>
                <Link href='/challenges/todo-list'>Todo list</Link>
            </div>
        </main>
    );
}
