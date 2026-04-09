"use client"
import useStore from "@/store/useStore";
import Image from "next/image";

export default function Home() {
  const { setText } = useStore();

  return (
    <div>
      Home
      <Image src="/1.png" alt="blog slider" width={1170} height={500} />

      <div className="bg-red-500 mt-4">
        <input className="bg-myprimarycolor" type="text" onChange={(e) => setText(e.target.value)} />
      </div>

      
    </div>
  );
}
