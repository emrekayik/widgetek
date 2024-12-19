import { ModeToggle } from "@/components/ui/theme-toggle";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={
        "mx-auto w-full max-w-4xl px-4 pt-12 sm:px-6 lg:px-8 " + className
      }
    >
      <div className="border-t border-[#ff0] py-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground">© 2024 widgetek.</p>
          </div>
          <ul className="flex flex-wrap items-center">
            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-muted-foreground underline hover:text-muted-foreground/70 hover:decoration-2 focus:decoration-2 focus:outline-none"
                href="#"
              >
                Github
              </a>
            </li>
            <li className="inline-block">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
