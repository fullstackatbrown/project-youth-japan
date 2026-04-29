type PageHeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  children?: React.ReactNode;
  minHeightClassName?: string;
  titleClassName?: string;
};

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  children,
  minHeightClassName = "min-h-[55vh]",
  titleClassName = "text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-7xl break-words",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${minHeightClassName}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900/90" />

      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 py-20 text-center text-white">
        <h1 className={titleClassName}>
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/90">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

