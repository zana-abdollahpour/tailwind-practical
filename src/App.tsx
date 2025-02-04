import Image from "@/components/Image";

import { cn } from "@/utils";

export default function App() {
  return (
    <section className="inline-grid w-full bg-amber-100 text-white">
      <div
        className={cn(
          "inline-grid grid-cols-3 justify-center justify-items-center",
          "m-2 mx-auto max-w-screen-2xl gap-4",
        )}
      >
        <p className="col-span-full p-2 text-4xl font-black text-amber-950">
          Giggity
        </p>
        {Array.from({ length: 12 })
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={cn(
                `w-fit overflow-hidden rounded-lg bg-amber-200`,
                index % 2 === 0 && "self-center",
                index % 4 === 0 && "col-span-3",
              )}
            >
              <Image photo={index % 2 === 0 ? "brunette" : "ginger"} />
            </div>
          ))}
        <p className="col-span-full p-2 text-4xl font-black text-amber-950">
          Giggity
        </p>
      </div>
    </section>
  );
}
