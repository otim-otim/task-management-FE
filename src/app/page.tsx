import Link from "next/link";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[736px] flex flex-col gap-8 items-start">
        <Link
          href="/create"
          className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-white focus:relative bg-blue-500 w-full"
        >
          Create Task
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        </Link>
        <Tasks />
      </main>
    </div>
  );
}
