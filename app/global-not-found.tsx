// Import global styles and fonts
import RootLayout from "@/app/layout";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
   title: "404 - Not Found",
   description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
   return (
      <RootLayout>
         <section>
            <h1 className="typo-h1 mb-2">Not Found</h1>
            <p className="paragraph mb-1">I couldn&apos;t find the page you are looking for.</p>
            <p className="paragraph">
               <Link href="/" className="link">
                  Go Home
               </Link>
            </p>
         </section>
      </RootLayout>
   );
}
