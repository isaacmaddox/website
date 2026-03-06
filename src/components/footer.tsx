import Link from "next/link";

export function Footer() {
   return (
      <footer className="container">
         <p className="text-sm">
            &copy; Isaac Maddox, 2026. <Link href="#top">Back to top.</Link>
         </p>
      </footer>
   );
}
