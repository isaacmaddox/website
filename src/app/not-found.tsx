"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
   const router = useRouter();

   return (
      <main id="top">
         <section className="container">
            <h1>Not Found</h1>
            <p className="text-lg">I couldn&apos;t find what you were looking for.</p>
            <p className="text-center">
               Sorry about that. You can try <Link href="/">going home</Link> or{" "}
               <a href="#" onClick={() => router.back()}>
                  going back
               </a>
               .
            </p>
         </section>
      </main>
   );
}
