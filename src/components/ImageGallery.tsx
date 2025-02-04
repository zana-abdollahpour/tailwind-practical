import Image1 from "@/assets/images/image_1.jpg";
import Image2 from "@/assets/images/image_2.jpeg";
import Image3 from "@/assets/images/image_3.jpg";
import Image4 from "@/assets/images/image_4.jpg";
import Image5 from "@/assets/images/image_5.jpg";
import Image6 from "@/assets/images/image_6.jpg";
import Image7 from "@/assets/images/image_7.jpg";
import Image8 from "@/assets/images/image_8.jpg";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

export default function ImageGallery() {
  return (
    <main className="flex max-w-screen-2xl flex-col gap-y-6">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold sm:text-3xl xl:text-5xl">
          Beautiful Pictures To Behold
        </h2>
        <p className="sm:text-lg xl:text-xl">
          Beauty is in the eyes of beholder, yet sometimes this beauty keeps us
          from seeing the evil within...
        </p>
      </div>

      <section className="flex flex-wrap gap-4">
        {images.map((imageSrc, i) => (
          <figure key={i} className="flex-grow basis-80">
            <img alt="just another image" src={imageSrc} />
          </figure>
        ))}
      </section>
    </main>
  );
}
