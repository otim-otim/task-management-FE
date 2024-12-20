"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button 
      onClick={goBack}
      className={`flex items-center gap-2 text-white  ${className}`}
      {...props}
    >
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
        className="lucide lucide-arrow-left"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      
    </button>
  );
}