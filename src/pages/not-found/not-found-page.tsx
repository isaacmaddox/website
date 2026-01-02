import { Link } from "react-router-dom";

export function NotFoundPage() {
   return (
      <section className="p-6">
         <h1 className="typo-h1">Not Found</h1>
         <p className="paragraph">
            I couldn't find the page that you requested. Try{" "}
            <Link to="/" className="link">
               going home.
            </Link>
         </p>
      </section>
   );
}
