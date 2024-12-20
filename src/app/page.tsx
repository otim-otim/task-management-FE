import Link from "next/link";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[736px] flex flex-col gap-8 items-start relative">
        <Link
          href="/create"
          className="absolute -top-24 left-0 right-0 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-white focus:relative bg-[#1E6F9F] w-full z-10"
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
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </Link>
        <Tasks />
      </main>
    </div>
  );
}
