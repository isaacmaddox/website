import { cn } from "@/lib/util";
import { Link, useLocation } from "react-router-dom";

export function GlobalNav() {
  const { pathname } = useLocation();

  return (
    <section className={cn("sticky top-0 bg-white dark:bg-gray-900 z-10", "before:absolute before:inset-0 before:-z-1 dark:before:bg-gray-800/15")}>
      <nav>
        <ul className="flex flex-wrap gap-6 justify-center">
          <li>
            {pathname === "/" ? (
              <a href="#top" className="link">
                Top
              </a>
            ) : (
              <Link to="/" className="link">
                Home
              </Link>
            )}
          </li>
          <li>
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="link">
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
