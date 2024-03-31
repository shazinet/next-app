"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      <h1>Hello World!</h1>
      <button className="btn btn-secondary" onClick={() => setVisible(true)}>
        Show component
      </button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
