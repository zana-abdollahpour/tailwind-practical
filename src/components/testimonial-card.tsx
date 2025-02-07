import { FaStar } from "react-icons/fa";

export interface Testimonial {
  description: string;
  imgSrc: string;
  author: string;
  jobTitle: string;
}

export default function TestimonialCard({
  description,
  imgSrc,
  author,
  jobTitle,
}: Testimonial) {
  return (
    <div className="flex flex-grow basis-72 flex-col gap-y-4 rounded-lg border-2 border-sky-400 p-8">
      <p className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-amber-400" />
        ))}
      </p>

      <p>{description}</p>

      <div className="flex gap-x-4">
        <figure className="size-12 overflow-hidden rounded-[50%]">
          <img src={imgSrc} alt={""} className="size-12 object-cover" />
        </figure>

        <div>
          <h5>{author}</h5>
          <p>{jobTitle}</p>
        </div>
      </div>
    </div>
  );
}
