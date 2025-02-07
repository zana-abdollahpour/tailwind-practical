import { FaStar, FaThumbsUp, FaUser } from "react-icons/fa";

import type { ReviewData } from "@/reviews-data";

export default function ReviewCard({
  rating,
  date,
  title,
  description,
  author,
  numLikes,
}: ReviewData) {
  return (
    <div className="flex flex-grow basis-72 flex-col gap-y-6 rounded bg-orange-200 p-5">
      <div className="flex items-center justify-between gap-x-2.5">
        <div className="flex gap-x-2">
          <p className="flex items-center gap-x-1 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-orange-400" : "text-gray-500"}
              />
            ))}
          </p>
          <p className="text-xs">
            Rating: <span className="font-black">{rating}</span>
          </p>
        </div>
        <p className="text-xs">{date}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base">{description}</p>
      </div>

      <div className="flex justify-between gap-x-2.5">
        <p className="flex items-center gap-x-2.5">
          <FaUser /> {author}
        </p>
        <div className="flex items-center gap-x-2.5">
          <p className="flex items-center gap-x-1">
            <FaThumbsUp className="inline text-lg text-blue-500" /> {numLikes}
          </p>
          <button
            type="button"
            className="rounded-md bg-orange-400 px-2 py-1 text-white"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
