import TestimonialCard, {
  type Testimonial,
} from "@/components/testimonial-card";

import Image1 from "@/assets/images/image_1.jpg";
import Image2 from "@/assets/images/image_2.jpg";
import Image3 from "@/assets/images/image_3.jpg";

const testimonials: Testimonial[] = [
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
    architecto delectus, voluptatum nisi tempora, beatae doloribus
    possimus eaque, minima recusandae consectetur animi enim ad.`,
    imgSrc: Image1,
    author: "Zhino James",
    jobTitle: "Founder LAL",
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
    architecto delectus, voluptatum nisi tempora, beatae doloribus
    possimus eaque, minima recusandae consectetur animi enim ad.`,
    imgSrc: Image2,
    author: "Kimia Santiago",
    jobTitle: "Founder PAM",
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
    architecto delectus, voluptatum nisi tempora, beatae doloribus
    possimus eaque, minima recusandae consectetur animi enim ad.`,
    imgSrc: Image3,
    author: "Margot Joestar",
    jobTitle: "Founder CRK",
  },
];

export default function App() {
  return (
    <main className="flex max-w-screen-2xl flex-col gap-y-10">
      <div className="mx-auto space-y-2.5 text-center lg:w-3/4">
        <h6 className="text-lg font-semibold text-sky-100">Testimonials</h6>
        <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
          What our clients say
        </h1>
        <p className="text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fuga,
          eligendi obcaecati blanditiis, earum ab nisi beatae dolorem ipsum quod
          odio. Quasi, a? Iure tempore nam debitis reiciendis, corporis
          cupiditate.
        </p>
      </div>

      <section className="flex flex-wrap gap-5">
        {testimonials.map((testimonialData) => (
          <TestimonialCard {...testimonialData} />
        ))}
      </section>
    </main>
  );
}
