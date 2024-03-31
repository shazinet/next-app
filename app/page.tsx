import Image from "next/image";
import fatemeh from "@/public/images/fatemeh.PNG";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="fatemeh"
        // width={300}
        // height={170}
        fill
        // style={{ objectFit: "cover" }} //cover, contain
        className="object-cover" // Tailwind
        sizes="(max-width: 480px) 100vw, (max-width: 768) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
