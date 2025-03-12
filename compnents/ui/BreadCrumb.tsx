"use client";

import { HouseWifi } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav
      className="justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-300"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
        <li>
          <Link
            href="/"
            className="ms-1 flex items-center gap-[8px] text-sm font-medium text-gray-700 hover:text-red-500 md:ms-2 dark:text-gray-400 dark:hover:text-white"
          >
            <HouseWifi size={18} />
            Home
          </Link>
        </li>

        {paths.map((path, index) => {
          return (
            <li
              key={`bread-crumb-${path}`}
              aria-current={index === paths.length - 1 ? "page" : undefined}
            >
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <div className="ms-1 text-sm font-medium text-gray-700 hover:text-red-500 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                  {path}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
