import { FadeIn } from "./motion";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <FadeIn
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "mx-0 text-left"}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
        {text}
      </p>
    </FadeIn>
  );
}
