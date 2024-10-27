"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.location.href = "https://forms.gle/GpMbk8TNgHpZrzKy6";
   }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p>Redirecting...</p>
        </ol>
      </main>
      
    </div>
  );
}
