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
    <div className="flex justify-between items-center mt-4 w-full pt-12">
      {previous ? (
        <Button 
          asChild
          variant="ghost"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-4 flex-1 max-w-[35%]"
        >
          <Link 
            href={previous.href} 
            className="flex items-center gap-2 justify-start w-full"
          >
            <FaChevronLeft className="h-4 w-4" />
            <span className="font-medium text-left truncate">{previous.title}</span>
          </Link>
        </Button>
      ) : (
        <div className="flex-1 max-w-[45%]" />
      )}
      
      {next ? (
        <Button 
          asChild
          variant="ghost"
          className="hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-4 flex-1 max-w-[35%]"
        >
          <Link 
            href={next.href} 
            className="flex items-center gap-2 justify-end w-full"
          >
            <span className="font-medium text-right truncate">{next.title}</span>
            <FaChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div className="flex-1 max-w-[45%]" />
      )}
    </div>
  );
}