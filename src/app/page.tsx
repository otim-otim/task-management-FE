import Link from "next/link";
import Tasks from "./components/Tasks";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center min-h-screen p-0 sm:p-20 pb-20 gap-8 font-[family-name:var(--font-geist-sans)] relative"
      style={{ marginTop: "-100px" }}
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-[736px] flex flex-col items-center sm:items-start relative">
        <Link href="/create" className="w-full z-10">
          <div className="bg-[#1E6F9F] rounded-lg p-1 sm:p-2 w-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
            <div className="flex items-center space-x-2 text-white">
              <span className="text-sm sm:text-base text-center">
                Create New Task
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-plus"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </div>
          </div>
        </Link>
        <div className="w-full mt-8 sm:mt-10">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
