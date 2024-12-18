export function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className={className}>
        <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 lg:pt-32 xl:px-0">
          <h1 className="text-5xl font-semibold text-white md:text-6xl">
            <span className="text-[#ff0]">widgetek:</span> Free widgets for your
            notion
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-lg text-muted-foreground">
              Embeddable Widget Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
