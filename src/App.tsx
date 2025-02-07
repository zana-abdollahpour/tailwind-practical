import Fish from "@/assets/images/fish.jpg";
import Bear from "@/assets/images/bear.png";
import Gorilla from "@/assets/images/gorilla.jpg";
import Cat from "@/assets/images/cat.jpg";

const images = [Fish, Bear, Gorilla, Cat] as const;

export default function App() {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(18.5rem,1fr))] gap-5">
      {images.map((imageSrc) => (
        <figure className="grid grid-cols-1 grid-rows-1">
          <img alt="" src={imageSrc} className="col-span-full row-span-full" />
          <figcaption className="col-span-full row-span-full self-end rounded-b-md bg-gray-600/70 p-4 text-2xl text-white">
            The Beauty of Nature
          </figcaption>
        </figure>
      ))}
    </main>
  );
}
