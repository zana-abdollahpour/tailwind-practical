import ReviewCard from "@/components/review-card";

import { reviews } from "./reviews-data";

export default function App() {
  return (
    <main className="flex max-w-screen-2xl flex-col gap-y-8">
      <h1 className="text-3xl font-bold text-white lg:text-4xl">
        Most recent reviews
      </h1>

      <section className="flex flex-wrap gap-5">
        {reviews.map((reviewData) => (
          <ReviewCard {...reviewData} />
        ))}
      </section>
    </main>
  );
}
