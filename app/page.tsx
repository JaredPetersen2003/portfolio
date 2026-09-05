const links = [
  { label: "GitHub", href: "https://github.com/JaredPetersen2003" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jared-petersen-632669282/",
  },
  { label: "Email", href: "mailto:jared@teamgeek.io" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-8 py-32 sm:px-16">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl dark:text-zinc-50">
            Jared Petersen
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {/* TODO: replace with your own one-liner. */}
            Software engineer building for the web.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-base font-medium">
          {links.map(({ label, href }) => {
            const isExternal = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-50"
              >
                {label}
              </a>
            );
          })}
        </nav>
      </main>
    </div>
  );
}
