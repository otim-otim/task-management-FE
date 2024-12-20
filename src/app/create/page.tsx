import Task from "../components/Task";

export default function Create() {
    return (
        <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-[736px] flex flex-col gap-8 items-start">
    <Task />
        </main>
        </div>
    )
}