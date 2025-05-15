// docs/Component/Navigation.tsx
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "./ui/button";

export default function ContentNavigation({
  previous,
  next,
}: {
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
}) {
  return (
    <div className="flex justify-between mt-4 w-full border-t border-gray-200 dark:border-gray-700 pt-12">
      {previous ? (
        <Link
          href={previous.href}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-red-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            <Button>
          <FaChevronLeft className="h-4 w-4" />
          <span className="font-medium">{previous.title}</span>
          </Button>
        </Link>
      ) : (
        <div />
      )}
      
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-red-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
            <Button>
          <span className="font-medium">{next.title}</span>

          <FaChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}