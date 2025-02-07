export interface ReviewData {
  rating: number;
  date: string;
  title: string;
  description: string;
  author: string;
  numLikes: number;
}

export const reviews: ReviewData[] = [
  {
    rating: 4.0,
    date: "22, July 2027",
    title: "Not bad",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veritatis",
    author: "Sandra Doe",
    numLikes: 4,
  },
  {
    rating: 5.0,
    date: "12, Nov 2100",
    title: "Fantastic",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veritatis",
    author: "Jane Doe",
    numLikes: 35,
  },
  {
    rating: 1.0,
    date: "05, Jan 2026",
    title: "Disappointed",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veritatis",
    author: "Jack Doe",
    numLikes: 0,
  },
  {
    rating: 3.0,
    date: "12, Dec 2025",
    title: "Satisfied",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, veritatis",
    author: "John Doe",
    numLikes: 45,
  },
];
