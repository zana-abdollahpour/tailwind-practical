import GingerGirl from "@/assets/ginger-short-hair.jpg";
import BrunetteGirl from "@/assets/woman-short-wavy-hair.jpeg";

export default function Image(
  props: React.ComponentProps<"img"> & { photo: "ginger" | "brunette" },
) {
  const { photo } = props;
  return (
    <img src={photo === "ginger" ? GingerGirl : BrunetteGirl} {...props} />
  );
}
