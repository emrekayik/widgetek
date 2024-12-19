import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
      <nav className="relative mx-2 mt-4 w-full max-w-2xl rounded-[2rem] border border-border bg-background py-2.5 md:mx-auto md:flex md:items-center md:justify-between md:px-4 md:py-0">
        <div className="flex items-center justify-between px-4 md:px-0">
          <div>
            <Link
              className="inline-block flex-none rounded-md font-mono text-xl font-semibold focus:opacity-80 focus:outline-none"
              href="/"
              aria-label="Preline"
            >
              widgetek
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              type="button"
              className="hs-collapse-toggle flex size-6 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
              id="hs-navbar-header-floating-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-header-floating"
            >
              <svg
                className="hs-collapse-open:hidden size-3.5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Button>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="mt-3 flex flex-col gap-2 py-2 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-3 md:py-0 md:ps-7">
            <Link
              className="px-4 py-0.5 focus:outline-none md:px-1 md:py-3"
              href="#widgets"
            >
              Widgets
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
